var a={
    "_id" : ObjectId("5e37ba7b26971cbc6381586d"),
    "standard_user_id" : ObjectId("5e249ea8e05aebb919be6375"),
    "standard_user_email" : "test3@test.com",
    "form_instance_data" : {
        "form_instance_data" : {
            "5e31bdf0022f55171c29e536" : {
                "section_id" : "5e31bdf0022f55171c29e536",
                "status" : 1,
                "comment" : "",
                "updated_on" : "Mon Feb 03 2020 15:06:42 GMT+0530 (India Standard Time)",
                "updated_by" : "5e249ea8e05aebb919be6375",
                "section_controls" : {
                    "text-1580318156777" : "testt666666",
                    "email-1580318160067" : "gfhfdgh@gmail.com",
                    "phone-1580318163582" : "9557772281"
                }
            },
            "5e31bdf0022f55171c29e53a" : {
                "section_id" : "5e31bdf0022f55171c29e53a",
                "status" : 1,
                "comment" : "",
                "updated_on" : "Mon Feb 03 2020 15:06:42 GMT+0530 (India Standard Time)",
                "updated_by" : "5e249ea8e05aebb919be6375",
                "section_controls" : {
                    "date-1580318177143" : "2020-02-19T18:30:00.000Z",
                    "file-1580318183310" : [
                        "https://factory-os.s3.ap-south-1.amazonaws.com/factory_os_documents/factory_1580712889410.png"
                    ]
                }
            }
        },
        "user_id" : "5e249ea8e05aebb919be6375",
        "form_id" : "5e3437d4e2d1113a3d47cf99",
        "form_name" : "testing@29",
        "form_desc" : "testing@29",
        "project_name" : "testing@29"
    },
    "creation_datetime" : "2020-02-03 06:15:23",
    "updation_datetime" : "2020-02-03 09:36:42",
    "status" : 1,
    "submission_datetime" : "2020-02-03 07:04:51"
}
// var service = require('../service/service')
// var promise = require('bluebird')
// var mongoose = require('mongoose')


// function getData(req, res) {


//     promise.coroutine(function* () {
//         var data = req.body.form_id
//         var id = mongoose.Types.ObjectId(data);
//         var result_data = yield service.getData(id)
//         console.log("=======result_data", result_data.length);

//         var data = []
//         var section_controls = []
//         for (k = 0; k < result_data.length; k++) {
//             data.push({
//                 standard_user_email: result_data[k].standard_user_email,
//                 form_name: result_data[k].form_instance_data.form_name,
//                 project_name: result_data[k].form_instance_data.project_name,
//                 form_desc: result_data[k].form_instance_data.form_desc
//             })

//             for (i = 0; i < (result_data[k].customer_data.form_data.form_controls).length; i++) {
//                 var id = result_data[k].customer_data.form_data.form_controls[i]._id
//                 let id_data = result_data[k].form_instance_data.form_instance_data[id]

//                 if (id_data) {
//                     for (j = 0; j < result_data[k].customer_data.form_data.form_controls[i].section_controls.length; j++) {
//                         var name = result_data[k].customer_data.form_data.form_controls[i].section_controls[j].name;
//                         var object_data = {}
//                         object_data[name] = id_data.section_controls[name]
//                         section_controls.push(object_data)

//                     }
//                 }

//             }

//         }

//         data.push(section_controls)
//         console.log("============section controls", data, '--------');
//         return res.send({
//             message: "success",
//             status: 200,
//             data: data
//         })
//     })().catch((err) => {
//         console.log(err)
//         res.send(err);
//     });


// }
// module.exports = {
//     getData: getData
// }



       

