var Zoho = require('node-zoho');
var nconf = require('nconf');

exports.insert = function(req, res) {

    var zoho = new Zoho({
        authToken: nconf.get("zoho_token")
    });

    var records;

    switch (req.body.submit) {
        case 'support':
            {
                records =  [{  
                    //"Lead Source"	: ((req.body && req.body.lead_source) ? req.body.lead_source : "TWC Onboarding"),
                    "Lead Source"   : "Support",
                    "First Name"    : ((req.body && req.body.first_name) ? req.body.first_name : ""),
                    "Last Name"     : ((req.body && req.body.last_name) ? req.body.last_name : ""),
                    "Company"       : ((req.body && req.body.company) ? req.body.company : ""),
                    "Email"   		: ((req.body && req.body.email) ? req.body.email : ""),
                    "Website"       : ((req.body && req.body.website) ? req.body.website : ""),
                    "Phone"         : ((req.body && req.body.phone) ? req.body.phone : "") 
                }];
            }
            break;
        case 'quickdry_inquiry':
            {
                records =  [{  
                    //"Lead Source"	: ((req.body && req.body.lead_source) ? req.body.lead_source : "TWC Onboarding"),
                    "Lead Source"   : "Inquiry",
                    "First Name"    : ((req.body && req.body.first_name) ? req.body.first_name : ""),
                    "Last Name"     : ((req.body && req.body.last_name) ? req.body.last_name : ""),
                    "No of Employees" : ((req.body && req.body.number_of_employees) ? req.body.number_of_employees : ""),
                    "Email" : ((req.body && req.body.email) ? req.body.email : ""),
                    "Current Wireless Provider" : ((req.body && req.body.current_wireless_provider) ? req.body.current_wireless_provider : ""),
                    "Monthly Wireless Provider" : ((req.body && req.body.monthly_wireless_spend) ? req.body.monthly_wireless_spend : ""),
                    "Current Wireline Provider" : ((req.body && req.body.current_wireline_provider) ? req.body.current_wireline_provider : ""),
                    "Current Wireline Monthly Spend" : ((req.body && req.body.current_wireline_monthly_spend) ? req.body.current_wireline_monthly_spend : ""),
                    "Locations" : ((req.body && req.body.locations) ? req.body.locations : ""),
                    "Phone" : ((req.body && req.body.phone) ? req.body.phone : "") 
                }];
            }
            break;
        case 'quote':
            {
                records =  [{  
                    //"Lead Source"	: ((req.body && req.body.lead_source) ? req.body.lead_source : "TWC Onboarding"),
                    "Lead Source"   : "Quote",
                    "Company"       : ((req.body && req.body.company) ? req.body.company : ""),
                    "Address Line 2" : ((req.body && req.body.address_line_2) ? req.body.address_line_2 : ""),
                    "Country"       : ((req.body && req.body.country) ? req.body.country : ""),
                    "Street"        : ((req.body && req.body.street_address) ? req.body.street_address : ""),
                    "Region"        : ((req.body && req.body.region) ? req.body.region : ""),
                    "City"          : ((req.body && req.body.city) ? req.body.city : ""),
                    "Zip Code"      : ((req.body && req.body.zip_code) ? req.body.zip_code : ""),
                    "First Name"    : ((req.body && req.body.first_name) ? req.body.first_name : ""),
                    "Last Name"     : ((req.body && req.body.last_name) ? req.body.last_name : ""),
                    "Billing Address" : ((req.body && req.body.billing_address) ? req.body.billing_address : ""),
                    "Target Market" : ((req.body && req.body.target_market) ? req.body.target_market : ""),
                    "Company Type" : ((req.body && req.body.company_type) ? req.body.company_type : ""),
                    "Email" : ((req.body && req.body.email) ? req.body.email : ""),
                    "Phone" : ((req.body && req.body.phone) ? req.body.phone : "") 
                }];
            }
            break;
        case 'license':
            {
                records =  [{  
                    //"Lead Source"	: ((req.body && req.body.lead_source) ? req.body.lead_source : "TWC Onboarding"),
                    "Lead Source"   : "License",
                    "Company"       : ((req.body && req.body.company) ? req.body.company : ""),
                    "First Name"    : ((req.body && req.body.first_name) ? req.body.first_name : ""),
                    "Last Name"     : ((req.body && req.body.last_name) ? req.body.last_name : ""),
                    "Email" : ((req.body && req.body.email) ? req.body.email : ""),
                    "Number of Employees" : ((req.body && req.body.number_of_employees) ? req.body.number_of_employees : ""),
                    "Website" : ((req.body && req.body.website) ? req.body.website : ""),
                    "Title" : ((req.body && req.body.title) ? req.body.title : ""),
                    "Industry" : ((req.body && req.body.industry) ? req.body.industry : ""),
                    "Envision" : ((req.body && req.body.envision) ? req.body.envision : ""),
                    "Investment Size" : ((req.body && req.body.investment_size) ? req.body.investment_size : ""),
                    "Products Coated" : ((req.body && req.body.products_coated) ? req.body.products_coated : ""),
                    "Annual Volume Coated Phones" : ((req.body && req.body.annual_volume_coatedphones) ? req.body.annual_volume_coatedphones : ""),
                    "Region Interested" : ((req.body && req.body.region_interested) ? req.body.region_interested : ""),
                    "Annual Revenue License" : ((req.body && req.body.annual_revenue) ? req.body.annual_revenue : ""),
                    "Business Type" : ((req.body && req.body.type_of_business) ? req.body.type_of_business : ""),
                    "Locations" : ((req.body && req.body.locations) ? req.body.locations : ""),
                    "Newsltter" : ((req.body && req.body.newsletter) ? req.body.newsletter : ""),
                }];
            }
            break;
        default:

    }

    zoho.execute('crm', 'Leads', 'insertRecords', records, function(err, result) { 
        if (err !== null) {  
            console.error("Zoho Error: " + err);
            return res.status(200).send({
                success: false,
                err: err
            }) 
        } else if (result.isError()) {  
            console.error("Zoho Error: " + result.message);
            return res.status(200).send({
                success: false,
                data: result.message
            }) 
        } else {
            switch (req.body.submit) {
                case 'support':
                        res.render('../views/support',{title:'Support'});
                    break;
                case 'quickdry_inquiry':
                        res.render('../views/inquiry',{title:'Inquiry'});
                    break;
                case 'quote':
                        res.render('../views/quote',{title:'Get A Quote'});
                    break;
                case 'license':
                        res.render('../views/licensing',{title:'Licensing'});
                    break;
                default:

            }
            // return res.status(200).send({
            //     success: true,
            //     data: result.data
            // }) 
        }
    });
};
