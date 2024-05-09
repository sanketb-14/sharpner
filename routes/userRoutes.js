import {signup,getAllUsers} from '../controllers/userController.js'
import {getPost,addPost,findPost} from '../controllers/postController.js'
import { getAllComment,addComment}  from '../controllers/commentController.js'
import express from 'express'

const router = express.Router()

router.route('/signup').post(signup)
router.route('/users').get(getAllUsers)
router.route('/posts').get(getPost).post(addPost)
router.route('/posts/:id').get(findPost)
router.route('/comment').get(getAllComment).post(addComment)

export default router