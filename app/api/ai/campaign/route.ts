import { NextResponse } from "next/server";


export async function POST(request: Request) {


  try {


    const body = await request.json();


    const idea = body.idea;



    if(!idea){

      return NextResponse.json(
        {
          error:"Campaign idea required"
        },
        {
          status:400
        }
      );

    }



    /*
      Temporary AI response.
      Next step we connect OpenAI API.
    */


    const result = {

      title:
      `Building Impact Through ${idea}`,

      category:
      "Innovation",

      description:
      `This campaign focuses on creating meaningful solutions around ${idea}. Support this initiative and help transform communities.`,

      seo:
      [
        idea,
        "Africa innovation",
        "community impact",
        "social entrepreneurship"
      ],


      social:
      `We are building a better future through ${idea}. Join us and support this mission 🌍`

    };



    return NextResponse.json(result);


  }

  catch(error){


    return NextResponse.json(

      {
        error:"AI generation failed"
      },

      {
        status:500
      }

    );


  }


}
