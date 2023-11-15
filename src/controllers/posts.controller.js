const makeContactsService = require ('../services/posts.service');
const ApiError= require ('../api-error');

// async function createContact(req,res,next){
//     if (!req.body?.content){
//         return next(new ApiError(400, 'Post content can not be empty'));
//     }

//     try{
//         const contactsService = makeContactsService();
//         const contact = await contactsService.createContact(req.body)
//         return res.send(contact);
//     } 
//     catch (error){
//         console.log(error);
//         return next(
//             new ApiError(500, 'An error occurred while creating the contact')
//         );
//     }
// }

async function getAllPosts(req,res,next){
    let posts = [];
    try {
        const contactsService=makeContactsService();
        posts= await contactsService.getAllPosts();
    } catch (error){
        console.log(error);
        return next(
            new ApiError(500, 'An error occurred while retrieving all posts')
        );
    }
    return res.send(posts);
}

async function getAllTags(req,res,next){
    let tags = [];
    try {
        const contactsService=makeContactsService();
        tags= await contactsService.getAllTags();
    } catch (error){
        console.log(error);
        return next(
            new ApiError(500, 'An error occurred while retrieving all posts')
        );
    }
    return res.send(tags);
}

//work here please
async function getPostsByTag(req,res,next){
    let posts = [];
    try {
        const contactsService=makeContactsService();
        posts= await contactsService.getPostByTag(req.params.tag);
    } catch (error){
        console.log(error);
        return next(
            new ApiError(500, 'An error occurred while retrieving all posts')
        );
    }
    return res.send(posts);
}

// async function getContact(req,res,next){
//     try {
//         const contactsService = makeContactsService();
//         const contact = await contactsService.getContactById(req.params.id);
//         if (!contact){
//             return next(new ApiError(404, 'Contact not found'));
//         }
//         return res.send(contact);
//     } catch (error){
//         console.log(error);
//         return next(
//             new ApiError(
//                 500,
//                 `Error retrieving contact with id=${req.params.id}`
//             )
//         )
//     }
// }



// async function getContactsByFilter(req,res,next){
//     let contacts = [];
//     try {
//         const contactsService=makeContactsService();
//         contacts= await contactsService.getManyContacts(req.query);
//     } catch (error){
//         console.log(error);
//         return next(
//             new ApiError(500, 'An error occurred while retrieving contacts')
//         );
//     }
//     return res.send(contacts);
// }

// async function getContact(req,res,next){
//     try {
//         const contactsService = makeContactsService();
//         const contact = await contactsService.getContactById(req.params.id);
//         if (!contact){
//             return next(new ApiError(404, 'Contact not found'));
//         }
//         return res.send(contact);
//     } catch (error){
//         console.log(error);
//         return next(
//             new ApiError(
//                 500,
//                 `Error retrieving contact with id=${req.params.id}`
//             )
//         )
//     }
// }

// async function updateContact(req, res, next){
//     if (Object.keys(req.body).length ===0){
//         return next(new ApiError(400, 'Data to update cannot be empty'));
//     }
//     try {
//         const contactsService = makeContactsService();
//         const updated = await contactsService.updateContact(
//             req.params.id,
//             req.body
//         );
//         if (!updated){
//             return next(new ApiError(404, 'Contact not found'));
//         }
//         return res.send({ message: 'contact was updated successfully'});
//     } catch (error){
//         console.log(error);
//         return next(
//             new ApiError(500, `Error updating contact with id=${req.params.id}`)
//         );
//     }
// }
// async function deleteContact(req,res,next){
//     try {
//         const contactsService = makeContactsService();
//         const deleted = await contactsService.deleteContact(req.params.id);
//         if (!deleted){
//             return next(new ApiError(404, 'Contact not found'));
//         }
//         return res.send({ message: 'Contact was deleted successfully'});
//     } catch (error){
//         console.log(error);
//         return next(
//             new ApiError(
//                 500,
//                 `Could not delete contact with id=${req.params.id}`
//             )
//         );
//     }
// }
// //
// async function deleteAllContacts(req,res,next){
//     try {
//         const contactsService = makeContactsService();
//         const deleted = await contactsService.deleteAllContacts();
//         return res.send({
//             message: `${deleted} contacts were deleted successfully`,
//         });
//     } catch (error){
//         console.log(error);
//         return next(
//             new ApiError(500, 'An error occurred while removing all contacts')
//         );
//     }
// }
module.exports = {
    // getContactsByFilter,
    // deleteAllContacts,
    // getContact,
    // createContact,
    // updateContact,
    // deleteContact,
    getAllPosts,
    getAllTags,
    getPostsByTag
}