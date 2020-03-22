### Version 0.0.1 on https://help-the-hood.web.app 

In just over a day we developed the idea and a prototype for Help the Hood - as part of the #WirVsVirus Hackathon of 
the German Federal Government.  The webapp connects people who need or provide support and involves local businesses. 

## The Idea: Community Help for People and Businesses
The idea for a neighbourhood app is not new, nor is the desire for more neighbourly solidarity in anonymous cities.
All team members of Help the Hood live in Berlin. And it is precisely this solidarity that we have declared to be the 
goal of Help the Hood. We hope to take positive things out of the Corona crisis for community life in the long term. 
The special thing about Help the Hood: We have the idea of involving not only the people in a "Hood" in this solidarity, 
but also local companies as part of an incentive program. In this way, Help the Hood can support people and 
local businesses alike - even beyond the Corona crisis. 

Have a look at our [UI-Prototype](https://www.figma.com/proto/tdxaurj3F7TmSGfldgqpzH/Untitled?node-id=29%3A74&scaling=scale-down) 
or the current [state of our webapp](https://help-the-hood.web.app)

## How *Help the Hood* works
The Webapp Help the Hood brings people who need support in their daily lives in these special times together with those 
who can help. Users seeking help can create tasks that are displayed to users in their neighbourhood. A few pieces
of information are sufficient for this. 

People willing to help can take over these tasks. Details or ways of further communication are agreed upon in a 
personal chat, which only becomes accessible when a task is accepted. Those seeking help can decide at any time 
from whom they accept or reject the offer of help. 

## Local companies participate through discounts - and profit

The special thing: If help is provided, *Help the Hood* rewards the deployment for the community with a so called
Hood dollar. To increase the fun of helping, there is a local ranking and challenges. But most importantly,
the collected Hood-Dollars can be redeemed for discounts at participating local cafés, restaurants and shops.
In this way they win customers and benefit in the long term from a solidary, participative and positive neighbourhood 
at their location. In this way the aid strengthens the neighborhood and the local economy - even beyond the Corona crisis. 


##Technologies: Ionic and Firebase for rapid prototyping
To get a prototype up and running within a day, starting from scratch, we used the Ionic framework and made use 
of the cloud functionalities of Google Firebase. The UI mockup was created in Figma. 

## How we plan to continue with *Help the Hood*

Crucial for the success of *Help The Hood* is to locally attract a fairly large number of users so that 
help can be offered and provided. In addition to the technical development of the webapp, increasing its popularity 
is therefore of central importance. 

Our location in Berlin is a big advantage for this. Locally, quite a large number of people of all ages can be 
reached and motivated to participate just by hanging up posters on front doors. As soon as the Webapp works reliably, 
we will pass on this task to our large network in Berlin by providing appropriate materials. 

Furthermore, we want to motivate local companies to reward their efforts for the local community, for example by 
offering discounts. In the current, sometimes tense economic situation, they are able to win customers and contribute
a great incentive. **In the long term, companies benefit from being located in a neighbourhood where people show
solidarity and enjoy living. Through posters or other advertising material they can also contribute to the awareness 
of *Help the Hood*.


### Getting Started

* [Download the installer](https://nodejs.org/) for Node LTS.
* Install the ionic CLI globally: `npm install -g ionic`
* Clone this repository: `git clone git@github.com:jmandt/help-the-hood-frontend.git`.
* Run `npm install` from the project root.
* Run `ionic serve` in a terminal from the project root.
* App runs on localhost:8100

###  Firebse
This App uses Firebase as a backend. It makes use of 
* Firestore
* Firebase Hosting and
* Firebase Functions


### Technical Issues
in case you cannot build it:

    npx npm-force-resolutions
    
    npm install

works like a charm
