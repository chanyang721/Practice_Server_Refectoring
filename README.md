## 구현시 선택한 설계 방향
* 기술 스택 선정 
그동안 미뤄왔던 TS를 시작해야겠다고 생각하여 TS + Express로 기본적인 서버를 구축할 예정이다.
필수 스택중 Jest, TypeDI, Joi는 처음 시도하는 스택들이기 때문에 공부가 필요해 보인다. 
TypeDI를 선택한 이유는 채용문서에서 향후 도입하려는 스택으로 적혀있기 때문이다. 

### 구현시 도메인 주도 설계(DDD)의 방향
사용자가 사용 모든것을 도메인이라고 한다. 
소프트웨어의 복잡성을 최소화하여 요구사항을 쉽게 파악할 수 있어야 한다.
소통이 원활하게 이루어질 수 있다. 
테스트를 쉽게 할 수 있다.
소통이 원활하게 이루어질 수 있다. 

# 구현 방법 혹은 과정
* 14일의 시간이 있지만, 스택을 익힐 시간을 7일로 측정했다.
* TS로 서버를 구축하기로 하여 TS 공식문서 블로깅 및 서버 구축을 시작하였다.
* TS 공식문서를 08.16일까지 블로깅 하면서 협업하기 좋고, 구조화된, 확장성이 열린 서버를 구축할 예정이다.
* 협업하기 좋고, 구조화된, 확장성이 열린 서버라는 것은 어떤 구조인가를 익혀서 블로깅 할 예정이다.
* 

# 구현하면서 했던 고민
* 가장 좋은 컨벤션이 무엇을 의미하는가? 
* 최대한 협업하기 좋고, 견고하고, 구조화되고, 확장에 열려 있는 코드라는 것을 정의내리지 못한다. 
* OOP / FP / 테스트코드 / 도메인 설계 / 프로젝트 구조 설계 등에 대한 이해도가 떨어진다. 

* 21.08.13, gitHub 패스워드가 PAT로 변경되어 push가 되지 않았다. 첨부된 링크를 살펴보니 push할 때 사용되는 password가 github password였는데 PAT로 발급받은 토큰을 입력해야 한다고 했다. 나는 Mac을 사용하고 있기 떄문에 keychain Access로 들어가 비밀번호를 업데이트 해줬다.

* 21.08.15, 내가 지금까지 만들었던 서버들은 과연 어떤 부분을 리팩토링 했어야 할까 ? 지금까지 내가 만든 서버라는 것은 요청에 의한 적절한 응답값을 주는 도구였다. 하지만, 백엔드에서 서버 설계라는 것을 생각하지 않고 구축하다보니 협업, 구조화, 확장성이라는 사고 방식을 서버 설계에 주입하지 않았다. 협업하기 좋고, 구조화된, 확장성이 열린 서버라는 것을 어떻게 설계해야 하는지에 대한 사고 방식과 구조를 공부해서 적용해보고 싶어졌다. 스택들을 익히고, 서버를 설계 단계부터 다시 익혀야한다. 남은 12일이라는 시간이 적어 보인다.

* 21.08.15, 데이터베이스를 구축하면서 ORM을 사용하지 않고 테이블을 생성하기 위한 방법을 고민했다. schema.sql파일에 생성하고 싶은 테이블과 관계 형성, 인덱스 생성하는 방법들을 찾아봤고 이를 mysql 실행문을 통해 연결된 데이터베이스에 생성할 수 있었다. 두개의 방법을 찾았다.
1. 터미널 상에서 "mysql -u root -p --database=Inflearn < [schema.sql 파일 경로]"
2. mysql 접속 후 "use [데이터베이스 이름]"으로 데이터 베이스 선택 -> "source [schema.sql 파일 경로]" 작성 후 엔터
Reference : https://www.javatpoint.com/mysql-tutorial

* 21.08.15, 관심사 분리? 라는 측면을 생각해보니 vaildation과 query를 한 뒤에 컨트롤러로 넘겨주는 미들웨어를 만들어 결과값만을 컨트롤러에서 다루는 구조는 어떨까? 모든 진행 과정을 나누어 모듈화하는것이 협업에 좋은, 구조화되며, 확정성에 좋은게 맞는건지 잘 모르겠다. 모든 것이 다른 파일에 있기 때문에 git 상에서 충돌이 적기 때문일까?

* 21.08.16, [Joi Blogging](https://chanyang721.notion.site/Joi-588aa44660954e918de7f29b11adbe07)

* 21.08.17 [TIL](https://chanyang721.notion.site/TIL-2021-08-17-Tues-df0894ada89349089b703e2b1f8a30c6)

* 21.08.18, [TIL](https://chanyang721.notion.site/TIL-2021-08-18-Wed-34f2cc269d684afdb5b57e0535900506)

* 21.08.19 [TIL](https://chanyang721.notion.site/TIL-2021-08-19-Thur-72dd53da13de4229bfe1072871944855)

* 21.08.19, 보통 ORM을 사용하다보면 models에 모델 정보들이 자동으로 들어가있었다. 하지만 ORM을 사용하지 않다보니 models에 들어가야 하는것이 무엇일까를 생각하게 되었다. MVC 디자인 패턴에서 Controller가 Models에게 사용자에게 받은 데이터를 주고 Models는 Database와 데이터를 주고 받는 역할이다. 따라서, models에는 쿼리문이 들어가야 하며, Request와 Respone객체를 받아서는 안된다. 그렇기 때문에 Models에서 각종 로직을 모두 처리한 후 Controller로 결과값을 전달해야 한다. 따라서 Model에서는 모듈간 의존성 결합이 자주 일어나게 된다고 생각하여 TypeDI의 @Service()를 Models에서 사용하는 것이 적합하다고 판단하였다.
그 후 의존성을 Controller에서 주입하여 사용하는 구조로 설계해야겠다.

* 21.08.19, 다른 사람들의 서버 설계를 보면 service라는 파일이 자주 보인다. Service에서는 ORM을 이용한 데이터 처리 로직들이 들어가있는것을 확인했는데 그럼 models는 ORM을 사용하기 떄문에 사용하지 않고 Service라는 파일을 만든 것일까?

* 21.08.20, [TypeDI Blogging](https://chanyang721.notion.site/Dependency-Injection-DI-97303ec03e544adc9e597e558078288a)

* 21.08.21, 데이터 스키마의 정보

# Entity Relationship Diagram (ERD)
- ERD에는 아래 항목들이 포함되어 있어야 합니다.
- 컬럼명 / 타입 / 컬럼설명
- PrimaryKey / UniqueKey / ForeignKey / Index

# 프로젝트를 실행할 수 있는 방법을 기술