

export interface IdetailLecture {
    lecturesInfo: {
        title: string,
        description: string,
        category: string,
        price: number,
        attendance: number,
        students: {
            
        },
        created_at,
        updated_at
    }, 
};

// 수강생 목록 = { 아이디: { 닉네임: 닉네임, 신청일: 신청일 } }