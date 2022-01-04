import { Box, Grid } from "@material-ui/core";
import MediaCards from "./MediaCards";

const mediacards=[
    {
        image:"https://images.pexels.com/photos/7855299/pexels-photo-7855299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",

        title:"Elahe",
        decription:"Lorem ipsum dolor sit amet, consectetur adipisici elit, …“ ist ein Blindtext, der nichts bedeuten soll, sondern als Platzhalter im Layout verwendet wird, um einen Eindruck vom fertigen Dokument zu erhalten."
    },
    {
        image:"https://images.pexels.com/photos/7855299/pexels-photo-7855299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",

        title:"Elahe",
        decription:"Lorem ipsum dolor sit amet, consectetur adipisici elit, …“ ist ein Blindtext, der nichts bedeuten soll, sondern als Platzhalter im Layout verwendet wird, um einen Eindruck vom fertigen Dokument zu erhalten."
    },
    {
        image:"https://images.pexels.com/photos/7855299/pexels-photo-7855299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",

        title:"Elahe",
        decription:"Lorem ipsum dolor sit amet, consectetur adipisici elit,  ist ein Blindtext, der nichts bedeuten soll, sondern als Platzhalter im Layout verwendet wird, um einen Eindruck vom fertigen Dokument zu erhalten."
    },
    {
        image:"https://images.pexels.com/photos/7855299/pexels-photo-7855299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",

        title:"Elahe",
        decription:"Lorem ipsum dolor sit amet, consectetur adipisici elit,  ist ein Blindtext, der nichts bedeuten soll, sondern als Platzhalter im Layout verwendet wird, um einen Eindruck vom fertigen Dokument zu erhalten."
    },
    {
        image:"https://images.pexels.com/photos/7855299/pexels-photo-7855299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",

        title:"Elahe",
        decription:"Lorem ipsum dolor sit amet, consectetur adipisici elit,  ist ein Blindtext, der nichts bedeuten soll, sondern als Platzhalter im Layout verwendet wird, um einen Eindruck vom fertigen Dokument zu erhalten."
    },
    {
        image:"https://images.pexels.com/photos/7855299/pexels-photo-7855299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",

        title:"Elahe",
        decription:"Lorem ipsum dolor sit amet, consectetur adipisici elit, ist ein Blindtext, der nichts bedeuten soll, sondern als Platzhalter im Layout verwendet wird, um einen Eindruck vom fertigen Dokument zu erhalten."
    },
    {
        image:"https://images.pexels.com/photos/7855299/pexels-photo-7855299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",

        title:"Elahe",
        decription:"Lorem ipsum dolor sit amet, consectetur adipisici elit,  ist ein Blindtext, der nichts bedeuten soll, sondern als Platzhalter im Layout verwendet wird, um einen Eindruck vom fertigen Dokument zu erhalten."
    },
    {
        image:"https://images.pexels.com/photos/7855299/pexels-photo-7855299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",

        title:"Elahe",
        decription:"Lorem ipsum dolor sit amet, consectetur adipisici elit,  ist ein Blindtext, der nichts bedeuten soll, sondern als Platzhalter im Layout verwendet wird, um einen Eindruck vom fertigen Dokument zu erhalten."
    }

]
export default function Cards() {
  

    return (
        <Box p={5}>
        <Grid container spacing={5} >
        {mediacards.map((item,i) =>{
        return    <Grid item  key={i}> <MediaCards {...item}/> </Grid>
        })}
      </Grid>
      </Box>


    );
}