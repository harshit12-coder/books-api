import Book from "../models/bookModel.js";

export const getAllBooks=async(req,res)=>{
    try{
        const books=await Book.find();
        res.status(200).json({message:"saari books",data:books});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"error aa rha hai"});
    }
}

export const getOneBook=async(req,res)=>{
    try{
        const book=await Book.findById(req.params.id);
        res.status(200).json({message:"book mil gyi",data:book});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:"error aa rha hai"});
    }
}
export const createBook=async(req,res)=>{
try{
    const book=await Book.create(req.body);
    res.status(201).json({message:"book create ho gyi",data:book});
}
catch(error){
    console.log(error);
    res.status(400).json({message:"error aa rha hai"});
}
}

export const updateBook=async(req,res)=>{
  try{
      const book=await Book.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});
    if(!book){
        return res.status(404).json({message:"book nahi mili to update kya kru laadle"});
    }
    res.status(200).json({message:"book update ho gyi",data:book});
  }
  catch(error){
    console.log(error);
    res.status(400).json({message:"error aa rha hai"});
  }
}

export const deleteBook=async(req,res)=>{
    try{
        const book=await Book.findByIdAndDelete(req.params.id);
        if(!book){
            return res.status(404).json({message:"book nahi mili to delete kya kru laadle"});
        }
        res.status(200).json({message:"book delete ho gyi",data:book});
    }
    catch(error){
        console.log(error);
        res.status(400).json({message:"error aa rha hai"});
    }
}