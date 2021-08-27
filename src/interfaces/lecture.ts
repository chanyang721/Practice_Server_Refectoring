

export interface IdetailLecture {
    lecturesList: {
        title: string,
        description: string,
        category: string,
        price: number,
        attendance: number,
        students: Object,
        created_at: Date,
        updated_at:Date,
    }, 
};

export interface IdefaultLecture {
    lecturesList: {
        lectureId: string,
        category: string,
        title: string,
        instructor: string,
        price: number,
        attendance: number,
        students: Object,
        created_at: Date,
        updated_at:Date,
    }, 
};


export interface IcreateLecture {
    instructor: string, 
    category: string, 
    title: string, 
    description: string, 
    price: number
};


export interface IupdateLectureInfo {
    title: string, 
    description: string, 
    price: number, 
    id: string
};

export interface IregisterLecture {
    students: object, 
    nickname: string, 
    lectureId: string, 
    studentId: string
};



// 수강생 목록 = { 아이디: { 닉네임: 닉네임, 신청일: 신청일 } }