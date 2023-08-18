create database ECM;
use ECM;

CREATE TABLE User(
	ID                  CHAR(6) primary key,
    SSN                 VARCHAR(12) NOT NULL unique,
    Email               VARCHAR(50),
    Phone               VARCHAR(50),
    FullName            VARCHAR(50),
    Sex					char(1) check(Sex in ('M', 'F')),
    Bdate				DATE,
    Address				varchar(50),
    Username            VARCHAR(50) NOT NULL unique,
    Pass                VARCHAR(50) NOT NULL,
    refreshToken        VARCHAR(256)
);
CREATE TABLE Admin(
	AID                  CHAR(6) primary key,
    FOREIGN KEY (AID) REFERENCES User (ID) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE Manager(
	MID                  CHAR(6) primary key,
    FOREIGN KEY (MID) REFERENCES User (ID) ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE TABLE Teacher(
	TID                  CHAR(6) primary key,
    FOREIGN KEY (TID) REFERENCES User (ID) ON DELETE CASCADE ON UPDATE CASCADE
);
-----------------------------------------
create table Student(
	ID                  CHAR(6) primary key,
    Email               VARCHAR(50),
    Phone               VARCHAR(50),
    FullName            VARCHAR(50),
    Sex					char(1) check(Sex in ('M', 'F')),
    Bdate				DATE,
    Address				varchar(50)
);
-----------------------------------------
create table Class(
	CID                 CHAR(6) primary key,
    So_buoi				INT check(So_buoi > 0),
    NumStudent			INT check(NumStudent > 0),
    DateS				Date,
    DateE				Date,
    Des					VARCHAR(300),
    CType				char(2) check(CType in ('1A', '2A', '3A', '4A')),
    TID			CHAR(6) not null,
    FOREIGN KEY (TID) REFERENCES Teacher (TID) ON DELETE CASCADE ON UPDATE CASCADE
);
-----------------------------------------
create table Room(
	RID                 CHAR(6) primary key,
    Name				varchar(10)
);
-----------------------------------------
create table Buoi_hoc(
	ID                 	CHAR(6) primary key,
    CID					CHAR(6) not null,
    RID					CHAR(6) not null,
    TID					CHAR(6),
    MID					CHAR(6),
    Ngay				Date,
    status				char(1) check(status in ('V', 'T', 'C', 'N', 'D')), -- vang, tre, co mat, đã đăng kí dạy bù
    tiet_bat_dau		int check(tiet_bat_dau > 1 and tiet_bat_dau < 12),
    so_tiet				int check(so_tiet > 0 and so_tiet < 4),
    note				varchar(300),
    ID_bu				CHAR(6),
    FOREIGN KEY (CID) REFERENCES Class (CID) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (RID) REFERENCES Room (RID) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (TID) REFERENCES Teacher (TID) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (MID) REFERENCES Manager (MID) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (ID_bu) REFERENCES Buoi_hoc (ID) ON DELETE CASCADE ON UPDATE CASCADE
);
-----------------------------------------
create table thuoc(
	CID					CHAR(6),
    SID					CHAR(6),
    CONSTRAINT thuoc_pk PRIMARY KEY (CID, SID),
    FOREIGN KEY (CID) REFERENCES Class (CID) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (SID) REFERENCES Student (ID) ON DELETE CASCADE ON UPDATE CASCADE
);
create table hoc(
	BID					CHAR(6),
    SID					CHAR(6),
    CONSTRAINT thuoc_pk PRIMARY KEY (BID, SID),
    note				varchar(50),
    status				char(1) check(status in ('V', 'T', 'C', 'N')), -- vang, tre, co mat
    FOREIGN KEY (BID) REFERENCES Buoi_hoc (ID) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (SID) REFERENCES Student (ID) ON DELETE CASCADE ON UPDATE CASCADE
);