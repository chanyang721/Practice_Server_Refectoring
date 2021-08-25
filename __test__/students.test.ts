// 서버 연결  
// MySQL 연결
// 데이터베이스 Inflearn 생성
// 스키마 테이블 넣기
// seed파일 넣기
////// 테스트 시작 //////
// 서버 연결 상태인지 확인
// MySQL 연결 상태 확인
// 데이터 베이스 Inflearn이 있는지 확인
// 테이블이 들어갔는지 확인
// seed 파일이 들어갔는지 확인
// 각 models 쿼리문을 실행했을때 나오는 값이 예상한 값과 일치한지 확인한다. 
// middlewares로 넣은 에러가 발생하는 입력값을 넣었을때 유효성 검사가 되는지 확인한다.
// middlewares로 넣은 옳바른 입력값을 넣었을때 유효성 검사가 되는지 확인한다.

import { expect } from "chai";
import * as request from "supertest";
import App from "../src/index"


describe('Test the root path', () => {
  test('It should response the GET method', (done) => {

  });
});
