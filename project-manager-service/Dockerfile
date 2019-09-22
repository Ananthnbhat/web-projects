FROM openjdk:8
ADD target/manager-mysql.jar manager-mysql.jar
EXPOSE 9091
ENTRYPOINT ["java", "-jar", "manager-mysql.jar"]