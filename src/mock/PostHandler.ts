import { rest } from 'msw';
import PostsData from './constants/PostsData.json';

export const PostHandler = [
  // 모든 작품 조회
  rest.get('/products', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(PostsData));
  }),

  // 작품 상세 조회
  rest.get('/products/:id', (req, res, ctx) => {
    const id = req.params.id;
    const url = new URL(req.url);
    const qr = url.searchParams.get('qr');
    const product = PostsData.filter((product) => product.productId === Number(id));
    if (!product) {
      return res(ctx.status(404), ctx.json({ message: '작품이 존재하지 않습니다.' }));
    }
    if (qr === 'true') {
      return res(ctx.status(200), ctx.json({ product: product[0], message: 'QR코드가 인증되었습니다.' }));
    }
    return res(ctx.status(200), ctx.json({ product }));
  }),

  //좋아요
  rest.patch('/products/:id/like', async (req, res, ctx) => {
    const id = req.params.productId;
    const body = await req.json();
    console.log(body);
    const { isLike } = body;
    const product = PostsData.filter((product) => product.productId === Number(id));
    if (!product) {
      return res(ctx.status(404), ctx.json({ message: '작품이 존재하지 않습니다.' }));
    }

    return res(
      ctx.status(200),
      ctx.json(isLike ? { data: 'true', message: '좋아요 완료' } : { data: 'false', message: '좋아요 취소' })
    );
  }),
];
