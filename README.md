## 구현시 선택한 설계 방향
* 기술 스택 선정 그동안 미뤄왔던 TS를 시작해야겠다고 생각하여 TS + Express로 기본적인 서버를 구축할 예정이다. 
* 필수 스택 중 Jest, TypeDI, Joi는 처음 시도하는 스택들이기 때문에 공부가 필요해 보인다. 아직 해당 스택들의 역할을 알지 못하기 때문에 해당 스택들에 대해 블로깅을 한 뒤 전체적인 서버의 구조를 잡고 서버를 만들기 시작해야될것같다.
* [서버 설계](https://chanyang721.notion.site/8121daf0cc674c28b945aabb650773bc)

# 구현 방법 혹은 과정
* 14일의 시간이 있지만, 스택을 익힐 시간을 9일로 측정했다.
* TS로 서버를 구축하기로 하여 TS 공식문서 블로깅 및 서버 구축을 시작하였다.
* TS 공식문서를 08.16일까지 블로깅 하면서 협업하기 좋고, 구조화된, 확장성이 열린 서버를 구축할 예정이다.
* 협업하기 좋고, 구조화된, 확장성이 열린 서버라는 것은 어떤 구조인가를 익혀서 블로깅 할 예정이다.
* 
<details>
    <summary></summary>
    <p>
        <ul>
            <li></li>
        </ul>
    </p>
</details>


# 구현하면서 했던 고민
<details>
    <summary>21.08.13</summary>
    <p>
        <ul>
            <li>gitHub 패스워드가 PAT로 변경되어 push가 되지 않았다. 첨부된 링크를 살펴보니 push할 때 사용되는 password가 github password였는데 PAT로 발급받은 토큰을 입력해야 한다고 했다. 나는 Mac을 사용하고 있기 떄문에 keychain Access로 들어가 비밀번호를 업데이트 해줬다.</li>
        </ul>
    </p>
</details>


<details>
    <summary>21.08.15</summary>
    <p>
        <ul>
            <li>내가 지금까지 만들었던 서버들은 과연 어떤 부분을 리팩토링 했어야 할까 ? 지금까지 내가 만든 서버라는 것은 요청에 의한 적절한 응답값을 주는 도구였다. 하지만, 백엔드에서 서버 설계라는 것을 생각하지 않고 구축하다보니 협업, 구조화, 확장성이라는 사고 방식을 서버 설계에 주입하지 않았다. 협업하기 좋고, 구조화된, 확장성이 열린 서버라는 것을 어떻게 설계해야 하는지에 대한 사고 방식과 구조를 공부해서 적용해보고 싶어졌다. 스택들을 익히고, 서버를 설계 단계부터 다시 익혀야한다. 남은 12일이라는 시간이 적어 보인다.</li>
            <li>데이터베이스를 구축하면서 ORM을 사용하지 않고 테이블을 생성하기 위한 방법을 고민했다. schema.sql파일에 생성하고 싶은 테이블과 관계 형성, 인덱스 생성하는 방법들을 찾아봤고 이를 mysql 실행문을 통해 연결된 데이터베이스에 생성할 수 있었다. 두개의 방법을 찾았다.
1. 터미널 상에서 "mysql -u root -p --database=Inflearn < [schema.sql 파일 경로]"
2. mysql 접속 후 "use [데이터베이스 이름]"으로 데이터 베이스 선택 -> "source [schema.sql 파일 경로]" 작성 후 엔터</li>
            <li>관심사 분리? 라는 측면을 생각해보니 vaildation과 query를 한 뒤에 컨트롤러로 넘겨주는 미들웨어를 만들어 결과값만을 컨트롤러에서 다루는 구조는 어떨까? 모든 진행 과정을 나누어 모듈화하는것이 협업에 좋은, 구조화되며, 확정성에 좋은게 맞는건지 잘 모르겠다. 모든 것이 다른 파일에 있기 때문에 git 상에서 충돌이 적기 때문일까?</li>
            <li>
            Reference
                - [도메인 주도 설계(Domain-Driven Design) in Real Project](https://medium.com/react-native-seoul/%EB%8F%84%EB%A9%94%EC%9D%B8-%EC%A3%BC%EB%8F%84-%EC%84%A4%EA%B3%84-domain-driven-design-in-real-project-1-%EB%8F%84%EB%A9%94%EC%9D%B8-83a5e31c5e45) <br>
                - [DDD 핵심만 빠르게 이해하기](https://happycloud-lee.tistory.com/94) <br>
                - [MySQL-tutorial](https://www.javatpoint.com/mysql-tutorial) <br>
            </li>
        </ul>
    </p>
</details>


<details>
    <summary>21.08.16</summary>
    <p>
        <ul>
            <li>[Joi Blogging](https://chanyang721.notion.site/Joi-588aa44660954e918de7f29b11adbe07)</li>
        </ul>
    </p>
</details>

<details>
    <summary>21.08.17</summary>
    <p>
        <ul>
            <li>sql문에서 WHERE 절에 @를 사용할 수 없다는 이상한 규칙을 발견했다. 찾아본 봐로는 @가 다른 역할을 하기 때문에 그렇다는데 그럼 이메일은 어떻게 가져오는지 모르겠다.
                <pre>
                    <code>
                        let sql = `SELECT * FROM students WHERE email = ${email}`;
                        db.query(sql, (error, result) => {
                            if (error) res.send(error);
                            req.body.DuplicUser = result[0]
                            return next();
                        })
                    </code>
                </pre>
            </li>
            <li>?와 params를 사용하여 쿼리문을 작성하니 해결되었다. 아직도 왜 WHERE절에 직접 변수를 할당하면 신택스 에러가 나는지 모르겠다. 
                <pre>
                    <code>
                        let sql = `SELECT * FROM students WHERE email = ?`;
                        db.query(sql, [ email ], (error, result) => {
                            if (error) res.send(error);
                            req.body.DuplicUser = result[0]
                            return next();
                        })
                    </code>
                </pre>
            </li>
            <li>models에서 쿼리문을 작성하고 controllers에서는 결과값 models를 통해 받아와 response객체를 생성하려고한다. models에서 쿼리문을 통해 이메일 체크를 하고 controllers로 next()를 이용해 넘어갔다. 하지만 controllers에서 유저를 생성하는 쿼리문을 다시 작성할 수 없어서 models에 utils를 만든 후 utils함수에 callback함수를 적용한 후 다시 import했다. 
                <pre>
                    <code>
export const utils = {
    students: {
        create: (email: string, callback: Function): void => {
            const nickName = email.split("@")[0];
            
            const sql = `INSERT INTO students (nickname, email, lectures) VALUES (?, ?, ?)`;
            const params = [nickName, email, "{}"]
            db.query(sql, params, (error, result) => {
                if (error) console.log(error);
                callback(error, result);
            })
        },
    },
}
                    </code>
                </pre>
                <pre>
                    <code>
// controllers/students.ts // 
export const createStudent = async (req: Request, res: Response): Promise<any> => {
    const { DuplicUser, email } = req.body

    if (!DuplicUser) {
        utils.students.create(email, (error: Error, result: any) => {
            if (error) res.status(400).json(messageFormat(400, "생성 오류 발생", error));
            else res.status(201).json(messageFormat(201, "생성 완료"));
        })
    }
    else {
        res.status(400).json(messageFormat(400, "중복된 이메일이 존재합니다."))
    }
};
                    </code>
                </pre>
            </li>
        </ul>
    </p>
</details>


### 21.08.18 
* [TIL](https://chanyang721.notion.site/TIL-2021-08-18-Wed-34f2cc269d684afdb5b57e0535900506)

### 21.08.19
* [TIL](https://chanyang721.notion.site/TIL-2021-08-19-Thur-72dd53da13de4229bfe1072871944855)
* 보통 ORM을 사용하다보면 models에 모델 정보들이 자동으로 들어가있었다. 하지만 ORM을 사용하지 않다보니 models에 들어가야 하는것이 무엇일까를 생각하게 되었다. MVC 디자인 패턴에서 Controller가 Models에게 사용자에게 받은 데이터를 주고 Models는 Database와 데이터를 주고 받는 역할이다. 따라서, models에는 쿼리문이 들어가야 하며, Request와 Respone객체를 받아서는 안된다. 그렇기 때문에 Models에서 각종 로직을 모두 처리한 후 Controller로 결과값을 전달해야 한다. Model에서는 모듈간 의존성 결합이 자주 일어나게 된다고 생각하여 TypeDI의 @Service()를 Models에서 사용하는 것이 적합하다고 판단하였다.
* 다른 사람들의 서버 설계를 보면 service라는 파일이 자주 보인다. Service에서는 ORM을 이용한 데이터 처리 로직들이 들어가있는것을 확인했는데 그럼 models는 ORM을 사용하기 떄문에 사용하지 않고 Service라는 파일을 만든 것일까?

### 21.08.20, [TypeDI Blogging](https://chanyang721.notion.site/Dependency-Injection-DI-97303ec03e544adc9e597e558078288a)

### 21.08.23
* 의존성 주입이 되었는지 확인하는 방법을 찾아볼 예정이다. 의존성을 주입할 객체와 require로 불러온 객체가 다른 객체이면 의존성이 주입된것이라고 생각된다. 그 후 금일 내로 API 비즈니스 로직과 구현하며 변경되는 스키마를 완성하여 README.md의 ERD부분을 작성 완료하는 것이 목표이다.
* 의존성을 주입하기 위해서 생성자에 Service로 가져온 클래스를 넣어주었다. 의존성이 주입된건지 눈으로 확인할 수 없었지만 저렇게 하면 의존성이 주입된 상태라고 한다.. 
* Joi를 사용하고 유효성을 확인한 결과인 value값을 사용하지 않고 있어서 const { value, error } = await Joi.vaildate()로 확인한 값을 req.body로 재할당해서 사용하도록 수정했다.
* 프로젝트 구조를 위해 vaildation, controllers, models로 나누어서 각자의 역할을 하는 구성을 했는데 데이터의 이동 경로가 아직은 익숙하지 않다. 오늘 students, instructors, lectures와 관련된 기본적인 Create와 Update 로직을 구현했다.
* 수강생수를 구현하기 위해 원해는 students_info라는 콜론에 객체를 넣어 프로퍼티 구성을 students_id: created_at형식으로 해서 수강생수를 Object.key().length로 구하려고 했지만, 반복문을 사용해야한다는 것을 알고 attendence라는 콜론을 추가하게 되었다. 수강생register가 있을때마다 + 1을 해주는게 덜 복잡해보인다는 판단이다.  
* Joi로 카테고리의 값을 1개로 제한하는 방법을 고민하던 중, Joi.array().items(Joi.string).max(1)로 해결한듯 하다. length(1)은 길이가 1로 정해지기 때문에 카테고리를 선택하지 않은 경우를 포함하지 않기 때문이다.
* 아직 TypeScript를 어떻게 사용하는지 모르겠다. 각종 타입들과 튜플, 제네릭, Interface등을 어떻게 사용하는지 모르는거같다. 기회가 된다면 공식문서를 블로깅할 예정이다. 입력값 interface를 정의해서 넣으면 이상하게 로직 내부에 있는 params에 적용한 값에서 typeError가 발생하는데 아직 이유를 알지 못한다. 

### 21.08.25
* 강의 목록 조회를 구현하면서 강사명, 강의명, 수강생ID에 따라 검색을 하는 부분에서 반복되는 쿼리문들이 늘어난다. 이 쿼리문들이 조금씩 다른데 이것은 카테고리를 검색 조건으로 걸고 최신순, 수강생수로 정렬하는것에서 조금씩 다른 코드들이 하나씩 더 늘어나게 되었는데 어떻게 하면 다른 부분을 변수로 만들어 하나의 코드로 만들수 있을까 ? 
* 우선 강사명, 강의명, 수강생ID 중 어떤것이 입력되는지에 따라 쿼리문에서 FROM "table"인 테이블과 JOIN 테이블과 열결해야하기 때문에 변경할 수 없다. 그렇다면 카테고리, 최신순, 수강생수로 검색하기 위한 쿼리문들은 줄일수있을까 ?
* 카테고리, 최신순, 수강생수로 검색하기 위한 쿼리문들 또한 입력된 강사명, 강의명, 수강생ID에 따라 lectures테이블에 접근하기 위한 쿼리문들이 다르기 때문에 합치기 힘들어 보인다. 
* 만약 lectures 테이블에 모든 정보가 있다면 어떨까? 이미 lectures 테이블에는 강사명, 강의명, 수강생ID와 카테고리, 최신순, 그리고 수강생수까지 모든 정보가 있다. 굳이 다른 테이블에서 접근하지 말고 API로 구분할 수 있는 방법이 있다면 테이블을 연결하지 않고 lectrues 테이블의 정보와 입력된 정보의 유무와 일치비교를 통해 반복되지 않는 쿼리문 작성이 가능하지 않을까? 
* 하지만, 같은 API로 내용의 적합성에 따라 params로 받는 id나 name의 값이 강사명인지, 강의명인지 구분하는 방법을 생각해보자면 강사명, 강의명, 수강생ID의 입력되는 양식에서 제한을 두어 겹치지 않도록 하는것은 어떨까. 그리고 양식의 제한으로 세개의 쿼리문을 통해 적합한 조회 방법을 구분하여 보내주는 방식은 어떤 단점이 있을까
* 과연 다른 사람이 내 코드를 보고 입력되는 양식에 제한을 두어 겹치지 않도록 한 부분을 이해하기 편할까 아니면 API를 전부 나눠서 같은 비즈니스로직이지만 쿼리문만 다른 반복되더라도 보기 편한 코드를 수정하는게 편할까...나라면 후자를 선택한다. 그냥 전부 나눠야겠다 
* 그렇다면 프론트쪽에서 axios를 통해 전달하는 API의 종류가 너무 많아지는 것은 아닐까? 확실히 프론트의 입장에서 보자면 같은 버튼을 눌러 요청을 보내지만, 내가 전부 나눠버리면 입력되는 값에 따라 서로 다른 API요청을 보내야 하기 때문에 코드가 매우 더러워질것으로 예상된다. 보는것이 조금은 어려워도 합쳐야하나?
* 만약 합치게 된다면 내 스키마에서 수강생ID를 lectures테이블에서 저장하는 방식은 { 수강생ID: 수강신청일자 }의 형식으로 students라는 콜론에 저장하고 있다. 이 방식을 통해 lectures테이블에서 수강생ID로 검색을 하면 모든 강의를 가져온뒤 반복문을 사용해서 해당 수강생ID의 키값을 가진 강의만 뺴내야 하는데 이게 강의 수가 많아질수록 매우 쓸데없이 자원을 낭비하는거같다.
* 따라서 수강생ID로 검색하는 경우를 위해 강의 신청을 할 때, 조인테이블에 저장된 정보들로 해당 학생이 등록한 강의들을 가져오게 되는데 이 경우는 쿼리문 반복을 피할수 없다.
* 강의 상세 조회에서는 수강생 목록이라는 것을 반환해야한다. 이를 위해 lectures에 students라는 콜론을 만들었었는데 { 수강생ID: 강의신청일자 }형식으로 했다. { 닉네임: 강의신청일자 }로 하지 않은 이유는 만약 학생이 닉네임을 변경하면 그 학생이 듣는 모든 강의의 정보도 수정해야하기 때문이다. 변경되지 않는 값에 의존해라 라는 원칙이 생각이 났다.
* 결국 { 수강생ID: { nickname, registerDay } }로 변경했다. 위의 형식대로 하면 쿼리문 만으로는 해당 요구사항을 만족할 방법을 찾지 못했다. 반드시 쿼리문과 반복문을 통해 해당 데이터를 만들어야 하기 때문에 강의를 등록할때 형식을 변경했다.
* 강의 조회에서 내가 설계한 API로 한다면 요청 API가 강사명, 강의명, 수강생ID로 전부 나누어진다. 하지만 결국 검색창은 하나이고 버튼도 하나일것이다. 그렇다면 어떻게 같은 API로 다른 정보와 테이블을 얻을 수 있을까? 일단 모든 정보를 JOIN으로 합치고 WHERE절에 OR를 넣어서 하면 되지 않을까?
* 그렇다면 강사명과 강의명은 하나의 검색창에 있을것이고, 수강생ID로 강의 조회는 로그인 상태인 회원의 내 강의 확인 버튼일것이다. 그렇기 때문에 기존에 구현한 강사명 조회 API들을 제거하고 lectures 라우팅에서의 params를 name으로 받은 후 WHERE에서 instructor = name OR title = name으로 쿼리문을 작성해볼것이다.
* OR을 이용하니 강사명과 강의명을 구분할 수 있게되었다. 하지만, 일부만 검색해도 조회가 되도록 LIKE % + ? + %을 대신 넣어봤지만 이상하게 모든 강의가 나오게 된다. 아쉽지만 일단 완성을 위해 넘긴다.
* LIKE "%${name}%"으로 적으니 작동한다. LIKE "%" + ? + "%"으로 params를 이용해 넣으면 쿼리문에 넣으면 "%'name'%"형식으로 sql문으로 들어가 신택스 에러를 발생시켰던거 같다.
* 카테고리를 검색 조건으로 사용한다는것이 우선 강의명, 강사명으로 검색한뒤 그 결과리스트에서 카테고리를 추가로 입력하여 다시한번 걸러낸다는 의미라고 생각했다.
* Reference
1. https://www.javatpoint.com/mysql-tutorial
2. https://github.com/sapegin/jest-cheat-sheet
3. https://www.daleseo.com/jest-async/

### 21.08.26 [Jest Blogging](https://chanyang721.notion.site/Jest-c2bc139b5c9a4ac6927ccc1cfeccefbf)

# Entity Relationship Diagram (ERD)
- ERD에는 아래 항목들이 포함되어 있어야 합니다.
- 컬럼명 / 타입 / 컬럼설명
- PrimaryKey / UniqueKey / ForeignKey / Index

# 프로젝트를 실행할 수 있는 방법을 기술
