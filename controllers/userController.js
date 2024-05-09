import prisma from '../DB/db.config.js'

export const signup =async (req,res)=>{
    const {name,email,password} = req.body

    const findUser = await prisma.user.findUnique({
        where:{
            email: email,
        }
    })
    if(findUser){
        return res.status(400).json({
            status: 'fail',
            message:"Email already exist..., please login!."
        })
    }

    const newUser = await prisma.user.create({
        data:{
            name,
            email,
            password,
        }
    })

    return res.status(200).json({
        status: 'success',
        data:{
            user:newUser
        }
    })


}
export const getAllUsers = async(req, res) =>{
    try {
        const users = await prisma.user.findMany()
        
        return res.status(200).json({
            status: 'success',
            data: {
                users
            }
        })
    } catch (error) {
        console.log(error);
        
    }

}