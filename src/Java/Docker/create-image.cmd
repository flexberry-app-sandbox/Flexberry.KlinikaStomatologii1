docker build --no-cache -f SQL\Dockerfile.PostgreSql -t klinikastomatologii-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t klinikastomatologii-java/app ../../..
