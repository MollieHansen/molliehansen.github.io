import { PortfolioSection } from "../../../../shared/models/portfolio-section.enum";

export const PORTFOLIO_METADATA = {
  [PortfolioSection.InvisibleWallpaper]: {
    title: 'Invisible Wallpaper',
    description:
    `Light reveals transferred knowledge. Each step of transfer blurs parts. To understand a single part better the rest is distorted and manipulated either through the magnification of the orbs or the orientation of the light. This piece is an inquiry into perceptions or privilege, knowledge, education, and transference. Each step is a little more and a little less revealing and is a representation of how through various educational institutions knowledge is a privilege and not clearly accessible. What is accessible if never the whole picture and is often blurry in some parts and noticeably clear in others, but at the end of the day it is still just a projection...an invisible wallpaper that covers up what is there...In this case a blank slate.`,
    materials: 'Glass, Silver Plate, Table, Lamp, LED Lights',
    year: '2024',
  },
  [PortfolioSection.PortraitDrip]: {
    title: 'Portrait Drip',
    description:
    `It did not just fall apart and shatter. It was oozing, congealing until what was there was unrecognizable. You were not sure when it started or how you got there. You cannot really remember it at all. Now you see and know yourself. It drips and drifts apart.
    
    This piece explores the representation of the family portrait as a portal into memories and the way they fall apart. The portraits themselves have disappeared and now what it left is just the bleary reflection of yourself.`,
    materials: 'Wooden Frames, Paint, Glass',
    size: '6\' x 6\'',
    year: '2024',
  },
  [PortfolioSection.SaltedBlooms]: {
    title: 'Salted Blooms',
    description:
    `This piece started as a response to accepting loss. It is an attempt to memorialize someone who is still alive but deteriorating. I am attempting to create a state of simultaneous decay and growth. This is achieved through the decay of the flowers and the growth of the salt crystals. Over time, the salt crystalizes and preserves the flowers to the point they dry out and no longer decay. This process is all existing within the blown glass piece is the perception or state of mind. The glass is magnified in some ways and distorted in others. This is a great representation of how we attempt to memorialize things, but it is also a representation of how I choose to share this experience with others.
    
    This also reflects how some understanding of our own grief is inaccessible even to ourselves. The glass also acts as a barrier as to how a wish the share this pain with everyone and how we often attempt to contain or hide our suffering. Through the magnification, viewers will see the crystallization of the salt and the gold leaf of the roots. The roots being a signifier of my own roots and connection to this loss and the growth of the crystals is a representation of not only the preservation of the memory, but the idea that the salt crystals will continue to grow transforming and changing the state of the piece just as our understanding changes.`,
    materials: 'Blown Glass, Epsom Salt, Whole Mum Plant, Liquid Gold Leaf, Time',
    size: '13\" x 13\" x 10\"',
    year: '2023',
  },
  [PortfolioSection.TheSwarm]: {
    title: 'The Swarm',
    description:
    `Aren\'t we all just parts of a bigger whole? Tools to provide nourishment that fuels the swarm. Can you see yourself in the others? We are all nothing more than the insignificant spoon providing nourishment to the hive of society. You can try to dress in frill or shine a little brighter. In the end the reflection is still always the same.`,
    materials: 'Spoons, Epoxy, Silicone',
    size: '10\" x 20\"',
    year: '2024',
  },
  [PortfolioSection.WhenTheDishRanAwayWithTheSpoon]: {
    title: 'When the Dish Ran Away with the Spoon',
    description:
    `This piece is an exploration into the dynamics of any close relationship. Sometimes we are the spoon constantly providing nourishment and a tool for care and feeding. Other times you are the dish. Always in service of others creating a safe place for rest (especially for the spoon). It is my hope that with this piece viewers can begin to question when they are the dish or when they are the spoon and recognize the importance of the push and pull of this dynamic. Without it we are all just a swarm of plates and cutlery in constant use, whose only function is to be a part of a whole.`,
    materials: 'Found Glass, Spoon, Glue',
    size: '6\” x 8\” (individually) larger display will vary',
    year: '2024',
  }
} as const;
