const graphql = require('graphql');

const{GraphQLObjectType, 
    GraphQLInt, 
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLEnumType
    } = graphql;

const IdeaType = new GraphQLObjectType({
    name: 'Idea',
    fields:()=>({
        id: {type: GraphQLID},
        title: {type: GraphQLString},
        datecreated: {type: GraphQLString},
        status: {type: GraphQLEnumType},
        creater: {type: GraphQLObjectType},
        description: {type: GraphQLString}
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        idea: {
            type: IdeaType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                //Datebase link/
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});