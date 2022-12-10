-- DROP TABLE IF EXISTS se_project.users;
-- DROP TABLE IF EXISTS roles;
-- DROP TABLE IF EXISTS faculties;
-- DROP TABLE IF EXISTS courses;
-- DROP TABLE IF EXISTS sessions;
-- DROP TABLE IF EXISTS enrollments;

CREATE TABLE IF NOT EXISTS se_project.users
(
    id SERIAL NOT NULL,
    "firstName" text NOT NULL,
    "lastName" text NOT NULL,
    "email" text NOT NULL,
    "password" text NOT NULL,
    "facultyId" integer NOT NULL,
    "roleId" integer NOT NULL,
    CONSTRAINT users_pkey PRIMARY KEY (id)
)

CREATE TABLE IF NOT EXISTS se_project.roles
(
    id SERIAL NOT NULL,
    "role" text NOT NULL,
    CONSTRAINT roles_pkey PRIMARY KEY (id)
)

CREATE TABLE IF NOT EXISTS se_project.faculties
(
    id SERIAL NOT NULL,
    "faculty" text NOT NULL,
    CONSTRAINT faculties_pkey PRIMARY KEY (id)
)

CREATE TABLE IF NOT EXISTS se_project.sessions
(
    id SERIAL NOT NULL,
    "userId" integer NOT NULL,
    "token" text NOT NULL,
    "expiresAt" timestamp NOT NULL,
    CONSTRAINT sessions_pkey PRIMARY KEY (id)
)

CREATE TABLE IF NOT EXISTS se_project.courses
(
    id SERIAL NOT NULL,
    "course" text NOT NULL,
    "code" text NOT NULL,
    "facultyId" integer NOT NULL,
    CONSTRAINT courses_pkey PRIMARY KEY (id)
)

CREATE TABLE IF NOT EXISTS se_project.enrollments
(
    id SERIAL NOT NULL,
    "userId" integer NOT NULL,
    "courseId" integer NOT NULL,
    "grade" decimal NOT NULL,
    "active" boolean NOT NULL,
    CONSTRAINT enrollments_pkey PRIMARY KEY (id)
)
