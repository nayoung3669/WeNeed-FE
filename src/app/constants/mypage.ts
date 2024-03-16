export const DEPARTMENT_LIST = [
  '경영학전공',
  '글로벌경영학전공',
  '회계세무학전공',
  '금융수학과',
  '빅데이터경영학과',
  '미디어커뮤니케이션학과',
  '관광경영학과',
  '경제학과',
  '의료산업경영학과',
  '응용통계학과',
  '사회복지학과',
  '유아교육학과',
  '심리학과',
  '한국어문학과',
  '영미어문학과',
  '동양어문학과',
  '유럽어문학과',
  '법학과',
  '행정학과',
  '경찰행정학과',
  '도시계획학전공',
  '조경학전공',
  '건축학전공',
  '건축공학전공',
  '실내건축학전공',
  '설비-소방공학과',
  '화공생명공학전공',
  '배터리공학전공',
  '기계공학전공',
  '산업공학전공',
  '스마트팩토리전공',
  '토목환경공학과',
  '신소재공학과',
  '바이오나노학과',
  '식품생명공학과',
  '식품영양학과',
  '생명과학과',
  '물리학과',
  '화학과',
  '소프트웨어전공',
  '인공지능전공',
  '컴퓨터공학전공',
  '스마트보안전공',
  '전자공학전공',
  '시스템반도체전공',
  '전기공학과',
  '스마트시티융합학과',
  '의공학과',
  '클라우드공학과',
  '한의예과/한의학과',
  '미술-조소전공',
  '디자인전공',
  '패션디자인전공',
  '성악전공',
  '기악전공',
  '작곡전공',
  '체육전공',
  '태권도전공',
  '연기예술학과',
  '자유전공',
  '한국학전공',
  '바이오의료기기학과',
  '게임-영상학과',
  '반도체-디스플레이전공',
  '반도체설계전공',
  '미래자동차학과',
  '의예과/의학과',
  '약학과',
  '간호학과',
  '바이오로직스학과',
  '치위생학과',
  '방사선학과',
  '물리치료학과',
  '응급구조학과',
  '운동재활학과',
] as const;

export const GRADE_LIST = ['1학년', '2학년', '3학년', '4학년'] as const;

export const INTEREST_FIELD_LIST = [
  '기획',
  '디자인',
  '미디어',
  '예술',
  'IT',
] as const;

export const INTERESTED_TAG_LIST = [
  '광고',
  '마케팅',
  '방송',
  '사진/영상',
  '아이디어',
  '브랜딩',
  '창업',
  '그래픽',
  'BXBI',
  'UXUI',
  '영상',
  '3D',
  '모션',
  '애니메이션',
  '제품',
  '인테리어',
  '패션',
  '문화',
  '연기',
  '음악',
  '무용',
  '조소',
  '회화',
  'AI',
  '데이터',
  '게임',
  '웹',
  '앱',
  '보안',
] as const;

const ITEM_LIST = ['복수전공', '관심분야', '이메일', '링크', '소개'];

export const MY_PAGE = {
  DEPARTMENT_LIST,
  GRADE_LIST,
  INTEREST_FIELD_LIST,
  INTERESTED_TAG_LIST,
  ITEM_LIST,
  TITLE: '프로필',
  PROFILE_IMAGE_CHANGE: '프로필 이미지 변경',
  MODIFY_PROFILE: '프로필 수정',
  NICKNAME: '닉네임',
  NICKNAME_CHECK: '중복확인',
  EXIST_NICKNAME: '이미 사용 중인 닉네임 입니다!',
  CAN_USE_NICKNAME: '사용 가능한 닉네임 입니다!',
  GRADE: '학년',
  MAJOR: '본전공',
  DOUBLE_MAJOR: '복수전공',
  INTEREST_FIELD: '관심분야',
  EMAIL: '이메일',
  LINK: '링크',
  INTRODUCE: '소개',
  EMPTY_INTRODUCE: '입력해주세요!',
  WARNING_INTRODUCE: '입력된 내용이 없습니다!',
  SUCCESS_MODIFY: '변경이 완료되었습니다!',
  MY_OUTPUT: 'MY OUTPUT',
  YOUR_OUTPUT: 'OUTPUT',
  MY_CREW: 'MY CREW',
  MY_FINDING_CREW: '나의 모집 CREW',
  MY_APPLYING_CREW: '나의 지원 CREW',
  INTEREST_OUTPUT: '관심 게시글',
  INTEREST_CREW: '관심 크루 찾기',
  TAG_RESET: '선택 초기화',
  postNum: (num: number) => `총 ${num}개`,
} as const;
