FROM openjdk:21-jdk-slim AS build

WORKDIR /app
COPY . .

RUN ./mvnw clean package -DskipTests

FROM openjdk:21-jdk-slim
WORKDIR /app

ARG PORT
ENV PORT=${PORT}

COPY --from=build /app/framework/target/*.jar app.jar

EXPOSE ${PORT}
CMD ["java", "-jar", "app.jar"]
