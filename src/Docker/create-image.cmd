docker build --no-cache -f SQL\Dockerfile.PostgreSql -t klinikastomatologii/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t klinikastomatologii/app ../..
