use ecm;

INSERT INTO User VALUES 
('111111', '064202010111', 'a1@gmai.com', '0339637721', 'Nguyen Van A', 'M', '2002-01-01', 'Ktx khu A', '111111', 'abc001');
INSERT INTO User VALUES
('111112', '064202010112', 'a2@gmai.com', '0339237721', 'Nguyen Van B', 'M', '2002-01-01', 'Ktx khu A', '111112', 'abc001');
INSERT INTO User VALUES 
('111113', '064202010113', 'a3@gmai.com', '0339677721', 'Nguyen Van C', 'M', '2002-01-01', 'Ktx khu A', '111113', 'abc001');
INSERT INTO User VALUES
('111114', '064202010114', 'a4@gmai.com', '0339657721', 'Nguyen Van D', 'M', '2002-01-01', 'Ktx khu A', '111114', 'abc001');
INSERT INTO User VALUES 
('111115', '064202010115', 'a5@gmai.com', '0339637771', 'Nguyen Van E', 'M', '2002-01-01', 'Ktx khu A', '111115', 'abc001');
INSERT INTO User VALUES 
('111116', '064202010116', 'a6@gmai.com', '0339637781', 'Le Thi A', 'F', '2002-01-01', 'Ktx khu A', '111116', 'abc001');
INSERT INTO User VALUES
('111117', '064202010117', 'a7@gmai.com', '0339637791', 'Le Thi B', 'F', '2002-01-01', 'Ktx khu A', '111117', 'abc001');
INSERT INTO User VALUES 
('111118', '064202010118', 'a8@gmai.com', '0339637701', 'Le Thi C', 'F', '2002-01-01', 'Ktx khu A', '111118', 'abc001');
INSERT INTO User VALUES
('111119', '064202010119', 'a9@gmai.com', '0339631121', 'Le Thi D', 'F', '2002-01-01', 'Ktx khu A', '111119', 'abc001');
INSERT INTO User VALUES 
('111120', '064202010120', 'a10@gmai.com', '0339612721', 'Le Thi E', 'F', '2002-01-01', 'Ktx khu A', '111120', 'abc001');
INSERT INTO User VALUES 
('111121', '064202010121', 'a11@gmai.com', '0339123721', 'Tran Van A', 'M', '2002-01-01', 'Ktx khu A', '111121', 'abc001');
INSERT INTO User VALUES
('111122', '064202010122', 'a12@gmai.com', '0339667721', 'Tran Van B', 'M', '2002-01-01', 'Ktx khu A', '111122', 'abc001');
INSERT INTO User VALUES 
('111123', '064202010123', 'a13@gmai.com', '0339638761', 'Tran Van C', 'M', '2002-01-01', 'Ktx khu A', '111123', 'abc001');
INSERT INTO User VALUES
('111124', '064202010124', 'a15@gmai.com', '0339637123', 'Tran Van D', 'M', '2002-01-01', 'Ktx khu A', '111124', 'abc001');
INSERT INTO User VALUES 
('111125', '064202010125', 'a16@gmai.com', '0339637729', 'Tran Van E', 'M', '2002-01-01', 'Ktx khu A', '111125', 'abc001');

insert into Admin values ('111111');
insert into Admin values ('111112');
insert into Admin values ('111113');
insert into Admin values ('111114');
insert into Admin values ('111115');
insert into Manager values ('111116');
insert into Manager values ('111117');
insert into Manager values ('111118');
insert into Manager values ('111119');
insert into Manager values ('111120');
insert into Teacher values ('111121');
insert into Teacher values ('111122');
insert into Teacher values ('111123');
insert into Teacher values ('111124');
insert into Teacher values ('111125');

insert into Student values ('211111', 'a2@gmail.com', '0339637722', 'Pham Thi A', 'F', '2002-01-02', 'Ktx khu B');
insert into Student values ('211112', 'a2@gmail.com', '0339637722', 'Pham Thi B', 'F', '2002-01-02', 'Ktx khu B');
insert into Student values ('211113', 'a2@gmail.com', '0339637722', 'Pham Thi C', 'F', '2002-01-02', 'Ktx khu B');
insert into Student values ('211114', 'a2@gmail.com', '0339637722', 'Pham Thi D', 'F', '2002-01-02', 'Ktx khu B');
insert into Student values ('211115', 'a2@gmail.com', '0339637722', 'Pham Thi E', 'F', '2002-01-02', 'Ktx khu B');
insert into Student values ('211116', 'a2@gmail.com', '0339637722', 'Doan Van A', 'M', '2002-01-02', 'Ktx khu B');
insert into Student values ('211117', 'a2@gmail.com', '0339637722', 'Doan Van B', 'M', '2002-01-02', 'Ktx khu B');
insert into Student values ('211118', 'a2@gmail.com', '0339637722', 'Doan Van C', 'M', '2002-01-02', 'Ktx khu B');
insert into Student values ('211119', 'a2@gmail.com', '0339637722', 'Doan Van D', 'M', '2002-01-02', 'Ktx khu B');
insert into Student values ('211120', 'a2@gmail.com', '0339637722', 'Doan Van E', 'M', '2002-01-02', 'Ktx khu B');

insert into Class values ('311111', 16, 50 , '2023-03-21', '2023-05-21', 'Lop Anh van du thinh', '3A', '111121');
insert into Class values ('311112', 16, 50 , '2023-02-21', '2023-04-21', 'Lop Anh van chinh quy', '4A', '111122');

insert into Room values ('400001', 'H1.301');
insert into Room values ('400002', 'H1.302');
insert into Room values ('400003', 'H1.303');
insert into Room values ('400004', 'H2.301');
insert into Room values ('400005', 'H2.302');
insert into Room values ('400006', 'H2.303');

insert into Buoi_hoc values ('500001', '311111', '400001', '111121', '111116', '2023-03-21', '8', '2', 'none', '500001');
insert into Buoi_hoc values ('500002', '311111', '400002', '111121', '111116', '2023-03-24', '8', '2', 'none', '500001');
insert into Buoi_hoc values ('500003', '311111', '400003', '111121', '111116', '2023-03-27', '8', '2', 'none', '500001');
insert into Buoi_hoc values ('500004', '311112', '400004', '111122', '111117', '2023-03-21', '8', '2', 'none', '500001');
insert into Buoi_hoc values ('500005', '311112', '400005', '111122', '111117', '2023-03-24', '8', '2', 'none', '500001');
insert into Buoi_hoc values ('500006', '311112', '400006', '111122', '111117', '2023-03-27', '8', '2', 'none', '500001');

insert into thuoc values ('311111', '211111');
insert into thuoc values ('311111', '211112');
insert into thuoc values ('311111', '211113');
insert into thuoc values ('311111', '211114');
insert into thuoc values ('311111', '211115');
insert into thuoc values ('311112', '211111');
insert into thuoc values ('311112', '211112');
insert into thuoc values ('311112', '211113');
insert into thuoc values ('311112', '211114');
insert into thuoc values ('311112', '211115');

