import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useCallback,
  useImperativeHandle,
} from "react";
import {
  ViewerApp,
  AssetManagerPlugin,
  GBufferPlugin,
  ProgressivePlugin,
  TonemapPlugin,
  SSRPlugin,
  SSAOPlugin,
  BloomPlugin,
  GammaCorrectionPlugin,
  mobileAndTabletCheck,
} from "webgi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollAnimation } from "../lib/scroll-animation";

gsap.registerPlugin(ScrollTrigger);

const WebgiViewer = forwardRef((props, ref) => {
  const canvasRef = useRef(null);

  const [viewerRef, setViewerRef] = useState(null);
  const [targetRef, setTargetRef] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [positionRef, setpositionRef] = useState(null);
  const canvasContainerRef = useRef(null);
  const [previewMode, setPreviewMode] = useState(false);
  const [isMobile, setIsMobile] = useState(null);

  useImperativeHandle(ref, () => ({
    triggerPreview() {
      setPreviewMode(true);
      props.contentRef.current.style.opacity = 0;
      canvasContainerRef.current.style.pointerEvents = "all";

      gsap.to(positionRef, {
        x: 13.04,
        y: -2.01,
        z: 2.29,
        duration: 2,
        onUpdate: () => {
          viewerRef.setDirty();
          cameraRef.positionTargetUpdated(true);
        },
      });

      gsap.to(targetRef, {
        x: 0.11,
        y: 0.0,
        z: 0.0,
        duration: 2,
      });

      viewerRef.scene.activeCamera.setCameraOptions({ controlsEnabled: true });
    },
  }));

  const memoizedScrollAnimation = useCallback(
    (position, target, onUpdate, isMobile) => {
      if (position && target && onUpdate) {
        scrollAnimation(position, target, onUpdate, isMobile);
      }
    }
  );

  const setupViewer = useCallback(async () => {
    const viewer = new ViewerApp({
      canvas: canvasRef.current,
    });
    setViewerRef(viewer);
    const isMobileOrTablet = mobileAndTabletCheck();
    console.log(isMobileOrTablet);
    setIsMobile(isMobileOrTablet);

    const manager = await viewer.addPlugin(AssetManagerPlugin);

    const camera = viewer.scene.activeCamera;
    const position = camera.position;
    const target = camera.target;

    setCameraRef(camera);
    setpositionRef(position);
    setTargetRef(target);

    // Add plugins individually.
    await viewer.addPlugin(GBufferPlugin);
    await viewer.addPlugin(new ProgressivePlugin(32));
    await viewer.addPlugin(new TonemapPlugin(true));
    await viewer.addPlugin(GammaCorrectionPlugin);
    await viewer.addPlugin(SSRPlugin);
    await viewer.addPlugin(SSAOPlugin);
    await viewer.addPlugin(BloomPlugin);

    // This must be called once after all plugins are added.
    viewer.renderer.refreshPipeline();

    await manager.addFromPath("scene-black.glb");
    viewer.getPlugin(TonemapPlugin).config.clipBackground = true;

    viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: true });

    if (isMobileOrTablet) {
      position.set(-16.7, 1.17, 11.7);
      target.set(0, 1.37, 0);
      props.contentRef.current.className = "mobile-or-tablet";
    }

    window.scrollTo(0, 0);

    let needsUpdate = true;

    const onUpdate = () => {
      needsUpdate = true;
      viewer.setDirty();
    };

    viewer.addEventListener("preFrame", () => {
      if (needsUpdate) {
        camera.positionTargetUpdated(true);
        needsUpdate = false;
      }
    });

    memoizedScrollAnimation(position, target, onUpdate, isMobileOrTablet);
  }, []);

  const exitPreviewMode = useCallback(() => {
    props.contentRef.current.style.opacity = 1;
    canvasContainerRef.current.style.pointerEvents = "none";
    viewerRef.scene.activeCamera.setCameraOptions({ controlsEnabled: false });
    setPreviewMode(false);

    gsap
      .to(positionRef, {
        x: !isMobile ? 1.5 : 9.366,
        y: !isMobile ? 5.0 : 10.95,
        z: !isMobile ? 0.01 : 0.09,
        scrollTrigger: {
          trigger: ".display-section",
          start: "top bottom",
          end: "top top",
          scrub: 2,
          immediateRender: false,
        },
        onUpdate: () => {
          viewerRef.setDirty();
          cameraRef.positionTargetUpdated(true);
        },
      })
      .to(targetRef, {
        x: !isMobile ? -0.55 : -6.62,
        y: !isMobile ? 0.32 : 0.02,
        z: !isMobile ? 0.0 : -0.06,
        scrollTrigger: {
          trigger: ".display-section",
          start: "top bottom",
          end: "top top",
          scrub: 2,
          immediateRender: false,
        },
      });
  }, [canvasContainerRef, viewerRef, positionRef, cameraRef, targetRef]);

  useEffect(() => {
    setupViewer();
  }, []);

  return (
    <div ref={canvasContainerRef} id="webgi-canvas-container">
      <canvas id="webgi-canvas" ref={canvasRef} />
      {previewMode && (
        <button className="button" onClick={exitPreviewMode}>
          Exit
        </button>
      )}
    </div>
  );
});

export default WebgiViewer;
