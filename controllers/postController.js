import prisma from "../DB/db.config.js";

export const getPost = async(req, res) =>{
    

    const posts = await prisma.post.findMany({})
    res.status(201).json({
        status:"success",
        data:{
            posts
        }
    })
}

export const addPost = async(req, res) =>{
    const {user_id,title,description} = req.body
    const newPost = await prisma.post.create({
        data:{
            user_id:Number(user_id),
            title,
            description
        }
    })
    res.status(201).json({
        status:"success",
        data:{
            newPost
        }
    })
}

export const findPost = async (req, res) => {
    const postId = req.params.id
    const post = await prisma.post.findFirst({
        where:{
            id:Number(postId),
        }
    })
    res.status(201).json({
        status: "success",
        data: {
            post
        }
    })
}