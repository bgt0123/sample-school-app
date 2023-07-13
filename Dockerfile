FROM postgres
ENV POSTGRES_PASSWORD docker
ENV POSTGRES_DB world
COPY students.sql /docker-entrypoint-initdb.d/