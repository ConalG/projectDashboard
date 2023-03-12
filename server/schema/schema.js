const graphql = require('graphql');

const{GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLSchema} = graphql;

const IdeaType = new GraphQLObjectType({
    name: 'Idea',
    fields:()=>({
        id: {type: GraphQLInt},
        title: {type: GraphQLString},
        datecreated: {type: GraphQLString},
        status: {type: GraphQLInt},
        creater: {type: GraphQLObjectType},
        description: {type: GraphQLString}
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        idea: {
            type: IdeaType,
            args: {id: {type: GraphQLInt}},
            resolve(parent, args){
                //Datebase link
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});