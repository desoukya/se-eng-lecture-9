-- Insert Courses
INSERT INTO se_project.courses("code", "course", "facultyId")
	VALUES ('CSEN 504', 'Software Engineering I', 2);
INSERT INTO se_project.courses("code", "course", "facultyId")
	VALUES ('CSEN 405', 'Software Engineering', 1);

-- Insert Faculties
INSERT INTO se_project.faculties("faculty")
	VALUES ('Engineering - Mechnical');
INSERT INTO se_project.faculties("faculty")
	VALUES ('Engineering - Electrical');
INSERT INTO se_project.faculties("faculty")
	VALUES ('Computer Science - Software Engineering');
INSERT INTO se_project.faculties("faculty")
	VALUES ('Computer Science - Data Science');
INSERT INTO se_project.faculties("faculty")
	VALUES ('Computer Science - Security');

-- Insert Roles
INSERT INTO se_project.roles("role")
	VALUES ('student');
INSERT INTO se_project.roles("role")
	VALUES ('admin');

-- Set user role as Admin
UPDATE se_project.users
	SET "roleId"=2
	WHERE "email"='desoukya@gmail.com';