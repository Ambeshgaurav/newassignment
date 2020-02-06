const connect = require('../config/config')



function getData(form_id) {
    // console.log("=======formid=======", form_id);

    return new Promise((resolve, reject) => {
        // console.log("======form_id=======",typeof(form_id));
        connect.dbo.collection('new_assignment_part1').aggregate([
            { $match: { "form_instance_data.form_id": form_id } },
            {
                $lookup:
                  {
                    from: "new_assignment_part2",
                    localField: "form_instance_data.form_id",
                    foreignField:"_id",
                    as:"customer_data"
                  }
             },
             {
                $unwind:{
                    path:"$customer_data"
                }
            }
        ]).toArray((err, res) => {
                if (err) {
                    reject(err)
                }
                else {
                    // console.log("-----res=================", res);
                    resolve(res);
                }
            });

    });

}


module.exports = {
    getData: getData

}