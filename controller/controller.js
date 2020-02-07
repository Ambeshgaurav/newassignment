var service = require('../service/service')
var promise = require('bluebird')
var mongoose = require('mongoose')


function getData(req, res) {


    promise.coroutine(function* () {
        var data = req.body.form_id
        var id = mongoose.Types.ObjectId(data);
        var result_data = yield service.getData(id)
        var form_data = []
        headers = {}
        for (k = 0; k < result_data.length; k++) {
            var object_data = {}
            for (i = 0; i < (result_data[k].customer_data.form_data.form_controls).length; i++) {
                var id = result_data[k].customer_data.form_data.form_controls[i]._id
                // console.log("==================id======",id);

                let id_data = result_data[k].form_instance_data.form_instance_data[id]
                // console.log("==============id_data",id_data);

                if (id_data) {
                    for (j = 0; j < result_data[k].customer_data.form_data.form_controls[i].section_controls.length; j++) {
                        var name = result_data[k].customer_data.form_data.form_controls[i].section_controls[j].name;
                        var description = result_data[k].customer_data.form_data.form_controls[i].section_controls[j].label
                        object_data[name] = id_data.section_controls[name]
                        headers[name]=description 
                    }
                }
                console.log("outer one", object_data);
            }

            form_data.push({
                standard_user_email: result_data[k].standard_user_email,
                form_name: result_data[k].form_instance_data.form_name,
                project_name: result_data[k].form_instance_data.project_name,
                form_desc: result_data[k].form_instance_data.form_desc,
                section_controls: object_data
            })
           
            

        }
        return res.send({
            message: "success",
            status: 200,
            data: {
                headers, form_data

            }
        })
    })().catch((err) => {
        console.log(err)
        res.send(err);
    });


}
module.exports = {
    getData: getData
}
