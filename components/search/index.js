import express from 'express';
import * as controller from './search-controller.js';
import { validate } from '../../lib/middleware/validate.js';
import * as schema from './config/request-schema.js';

// fix : default export로 변경
const router = express.Router();

// keyword에 대한 3개의 field에서 통합 검색
router.get('/total', validate(schema.total), controller.totalSearch)

// 날짜를 지표로 찾는다
// 원하는 날짜 field를 고른 뒤 범위에 해당하는 것들만 출력하게 한다.
router.post('/category_date', validate(schema.category_date), controller.rangeDate)

// 입력한 날짜가 start, end date 사이에 있으면 그 자료를 출력
// 논문자료만 해당
router.post('/thesis/period', validate(schema.period), controller.periodDate)

// thesis에서 찾고 싶은 field를 정한다음 찾을 수 있다.
router.get('/thesis', validate(schema.thesis), controller.thesisSearch)

// thesis 전체에서 검색
router.get('/thesis/total', validate(schema.thesistotal), controller.thesisTotalSearch)

// stock 전체에서 검색
router.get('/stock/total', validate(schema.stockTotal), controller.stockTotalSearch)

// stock 에서 카테고리별로 검색
router.get('/stock', validate(schema.stock), controller.stockSearch)

// 기업정보에서 전체 검색
router.get('/company/total', validate(schema.companyTotal), controller.companyTotalSearch)

// 기업정보에서 카테고리별로 검색
router.get('/company', validate(schema.company), controller.companySearch)

export default router;