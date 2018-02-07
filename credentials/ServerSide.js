/**
 * Created by patrick conroy on 2/3/18.
 */
module.exports =  {
    firebaseServerAuthCreds:{
        "type": "service_account",
        "project_id": "XXXXX",
        "private_key_id": "xxxxxxxxxxxxxxxxxx",
        "private_key": ""
        "client_email": "XXXXX"
        "client_id": "XXXXX",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://accounts.google.com/o/oauth2/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "XXXXXX"
    },
    session:{
        secret:"XXXXXXXXXX",
        storagePath:"/tmp/mlblog-distillant/sessions"

    }
};

