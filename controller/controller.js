var service = require('../service/service')
var promise = require('bluebird')
var mongoose = require('mongoose')


function getData(req, res) {


    promise.coroutine(function* () {
        var data = req.body.form_id
        var id = mongoose.Types.ObjectId(data);
        var result_data = yield service.getData(id)
        var data = []
        for (k = 0; k < result_data.length; k++) {
            var object_data = {}
            for (i = 0; i < (result_data[k].customer_data.form_data.form_controls).length; i++) {
                var id = result_data[k].customer_data.form_data.form_controls[i]._id
                let id_data = result_data[k].form_instance_data.form_instance_data[id]
                
                if (id_data) {
                    for (j = 0; j < result_data[k].customer_data.form_data.form_controls[i].section_controls.length; j++) {
                        var name = result_data[k].customer_data.form_data.form_controls[i].section_controls[j].name;
                        object_data[name] = id_data.section_controls[name] 
                    }
                }
                console.log("outer one",object_data); 
            }
            data.push({
                standard_user_email: result_data[k].standard_user_email,
                form_name: result_data[k].form_instance_data.form_name,
                project_name: result_data[k].form_instance_data.project_name,
                form_desc: result_data[k].form_instance_data.form_desc,
                section_controls:object_data
            }) 

        }
        return res.send({
            message: "success",
            status: 200,
            data: data
        })
    })().catch((err) => {
        console.log(err)
        res.send(err);
    });


}
module.exports = {
    getData: getData
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