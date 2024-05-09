import prisma from "../DB/db.config.js";

export const getAllComment = async (req, res) => {


    const posts = await prisma.comment.findMany({})
    res.status(201).json({
        status: "success",
        data: {
            posts
        }
    })
}

export const addComment = async (req, res) => {
    const { post_id,user_id, comment } = req.body
    const newPost = await prisma.comment.create({
        data: {
            user_id: Number(user_id),
            post_id:Number(post_id),
            comment
        }
    })
    res.status(201).json({
        status: "success",
        data: {
            newPost
        }
    })
}