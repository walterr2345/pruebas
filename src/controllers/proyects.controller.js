export const getProjects = (req,res) =>{
    res.send(`getting proyects`)
}

export const createProjects = (req,res) =>{
    console.log(req.body);
    res.send(`creating proyects`)
}

