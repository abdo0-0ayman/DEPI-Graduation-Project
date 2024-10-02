import {mongoose , Schema} from "mongoose"  
import {bcrypt} from "bcrypt"
 
const trainingDet = new Schema({
    trainingId : {
        type : String,
        required : true,
        unique : [true, 'You are already registered in this training'],
        validate : {
            validator : function(v){
                return /^[a-zA-Z0-9]+$/.test(v);
            }
        }
    } , 
    currentStatus : {
        type : String,
        required : true,
        unique : false,
        validate : {
            validator : function(v){
                return v === 'accepted' || v === 'pending' || 
                       v === 'rejected' || v === 'completed' || 
                       v === 'in progress' || v=== 'not started' || 
                       v ===  'filtered';
            }
        }
    },
})

const userHistory = new Schema({
    action : {
        type : String,
        required : true,
        unique : false,
    },
    date : {
        type : Date,
        required : true,
        unique : false,
    }
})

const userSchema = new Schema({

    firstName : {
        type : String,
        required : true,
        unique : false, 
        validate : {
            validator : function(v){
                return /^[a-zA-Z]+$/.test(v);
            },
            message : props => `${props.value} is not a valid first name`
        },
    },
    lastName : {
        type : String,
        required : true,
        unique : false, 
        validate : {
            validator : function(v){
                return /^[a-zA-Z]+$/.test(v);
            },
            message : props => `${props.value} is not a valid first name`
        },
    },
    mobileNumber : {
        type : String,
        required : true,
        unique : [true, 'Mobile number already in use'],
        validate : {
            validator : function(v){
                return /^01[0-2][0-9]{8}$/.test(v);
            },
            message : props => `${props.value} is not a valid mobile number`
        },
    },
    fbLink : {
        type : String,
        required : false,
        unique : [true, 'Facebook link already in use'],
        validate : {
            validator : function(v){
                return /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]+$/.test(v);
            },
            message : props => `${props.value} is not a valid facebook link`
        },
    },
    address : {
        government : {
            type : String,
            required : true,
            unique : false,
            validate : {
                validator : function(v){
                    return /^[a-zA-Z]+$/.test(v);
                },
                message : props => `${props.value} is not a valid government`
            },
        },
        city : {
            type : String,
            required : true,
            unique : false,
            validate : {
                validator : function(v){
                    return /^[a-zA-Z]+$/.test(v);
                },
                message : props => `${props.value} is not a valid city`
            },
        },
    },
    nationalId : {
        type : String,
        required : true,
        unique : [true, 'National id already in use'],
        validate : {
            validator : function(v){
                return /^[0-9]{14}$/.test(v);
            },
            message : props => `${props.value} is not a valid national id`
        },
    },

    academicInformaion : {
        university : {
            type : String,
            required : true,
            unique : false,
            validate : {
                validator : function(v){
                    return /^[a-zA-Z]+$/.test(v);
                },
                message : props => `${props.value} is not a valid university`
            },
        },
        faculty : {
            type : String,
            required : true,
            unique : false,
            validate : {
                validator : function(v){
                    return /^[a-zA-Z]+$/.test(v);
                },
                message : props => `${props.value} is not a valid faculty`
            },
        },
        level : {
            type : Number,
            required : true,
            unique : false,
            validate : {
                validator : function(v){
                    return /^[1-9]$/.test(v);
                },
                message : props => `${props.value} is not a valid year`
            },
        },
        academicEmail : {
            type : String,
            required : true,
            unique : [true, 'Academic email already in use'],
            validate : {
                validator : function(v){
                    return /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/.test(v);
                },
                message : props => `${props.value} is not a valid academic email`
            },
        },
    }, 

    role : {
        type : [String],
        required : true,
        unique : false,
        validate : {
            validator : function(v){
                return v === 'trainee' || v === 'admin' || 
                       v === 'mentor' ;
            },
            message : props => `${props.value} is not a valid role`
        },
    },

    accountInformation : {
        gmail : {
            type : String,
            required : true,
            unique : [true, 'Email already in use'],
            validate : {
                validator : function(v){
                    return /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/.test(v);
                },
                message : props => `${props.value} is not a valid email`
            },
        },
        password : {
            type : String,
            required : true,
            unique : false,
            validate : {
                validator : function(v){
                    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(v);
                },
                message : props => `${props.value} is a weak password`
            },
        },
    },
    
    competitiveInfo : {
        codeforcesHandle :{
            type : String,
            required : true,
            unique : [true, 'Codeforces handle already in use'],
            validate : {
                validator : function(v){
                    return /^[a-zA-Z0-9]+$/.test(v);
                },
                message : props => `${props.value} is not a valid codeforces handle`
            },
        },

        vJudgeHandle :{
            type : String,
            required : false,
            unique : [true, 'VJudge handle already in use'],
            validate : {
                validator : function(v){
                    return /^[a-zA-Z0-9]+$/.test(v);
                },
                message : props => `${props.value} is not a valid vJudge handle`
            },
        },

    },
    
    trainings : {
        details : [trainingDet],
    }, 

    history : {
        details : [userHistory],
    },
});