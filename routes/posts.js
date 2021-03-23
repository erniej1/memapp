import express from 'express';
//changes go here..and here//
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controller/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);
export default router;
