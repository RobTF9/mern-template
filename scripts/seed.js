const { exec } = require('child_process')

const name = process.argv[2] || 'mern'

const fs = require('fs/promises')

const now = new Date()
const date = now.toISOString()
// const yesterday = new Date(now - 1)

const resourceFields = {
  createdBy: {
    $oid: '62ebe39aea4bf07f32b51f18',
  },
  updatedBy: {
    $oid: '62ebe39aea4bf07f32b51f18',
  },
  createdAt: {
    $date: date,
  },
  updatedAt: {
    $date: date,
  },
}

const users = [
  {
    _id: {
      $oid: '62ebe39aea4bf07f32b51f18',
    },
    username: 'user',
    email: 'user@email.com',
    password: '$2a$08$nR5AlhhxkvKp55iIv0jKreGtjNOg/FHb3A2g6obDp5BFajvnpT9I2',
    createdAt: {
      $date: date,
    },
    updatedAt: {
      $date: date,
    },
  },
]

const projects = [
  {
    _id: {
      $oid: '62ebe39fea4bf07f32b51f1a',
    },
    content:
      'This is a project description you should be able to detect entities within it. This should help find observations or assumptions that are related',
    title: 'A project to gather observations and create assumptions',
    ...resourceFields,
  },
]

const evidence = [
  {
    _id: {
      $oid: '62ebe39fea4bf07f32b51f1d',
    },
    video:
      'https://res.cloudinary.com/dlhk8zpa5/video/upload/v1671611534/sbchhrsixmclzfzmmxbx.mov',
    transcript:
      'https://res.cloudinary.com/dlhk8zpa5/raw/upload/v1671611535/sbchhrsixmclzfzmmxbx.transcript',
    public_id: 'sbchhrsixmclzfzmmxbx',
    participant: 'Bob',
    project: '62ebe39fea4bf07f32b51f1a',
    transcriptObject: [
      {
        confidence: 0.9128385782241821,
        transcript: 'in a kitchen, that is',
        words: [
          {
            word: 'in',
            start_time: 0.1,
            end_time: 0.5,
            _id: '63a2c4de9ff7fb3e1e6bff8d',
          },
          {
            word: 'a',
            start_time: 0.5,
            end_time: 0.6,
            _id: '63a2c4de9ff7fb3e1e6bff8e',
          },
          {
            word: 'kitchen,',
            start_time: 0.6,
            end_time: 1.2,
            _id: '63a2c4de9ff7fb3e1e6bff8f',
          },
          {
            word: 'that',
            start_time: 1.2,
            end_time: 1.6,
            _id: '63a2c4de9ff7fb3e1e6bff90',
          },
          {
            word: 'is',
            start_time: 1.6,
            end_time: 1.7,
            _id: '63a2c4de9ff7fb3e1e6bff91',
          },
        ],
        _id: '63a2c4de9ff7fb3e1e6bff8c',
      },
    ],

    ...resourceFields,
  },
]

const observations = [
  {
    ...resourceFields,
    _id: {
      $oid: '62ebe39fea4bf07f32b51f1e',
    },
    content:
      'This is an observation, you should be able to detect entities within it, these should be surfaced in projects or on assumptions',
    evidence: {
      $oid: '62ebe39fea4bf07f32b51f1d',
    },
  },
  {
    ...resourceFields,
    _id: {
      $oid: '62ebe39fea4bf07f32b51f1f',
    },
    content:
      'This is another observation, it observes something different from the first. It apposes the assumption',
    evidence: {
      $oid: '62ebe39fea4bf07f32b51f1d',
    },
  },
]

const assumptions = [
  {
    _id: {
      $oid: '62ebe39fea4bf07f32b51f19',
    },
    content:
      'This is the assumption. The source and basis for all knowledge. Test it, iterate on it and become all powerful',
    opposing: [
      {
        $oid: '62ebe39fea4bf07f32b51f1f',
      },
    ],
    supporting: [
      {
        $oid: '62ebe39fea4bf07f32b51f1e',
      },
    ],
    ...resourceFields,
  },
]

async function postCollection(collection, object) {
  await fs.writeFile(
    `./scripts/seed-data/${collection}.json`,
    JSON.stringify(object),
    (err) => {
      if (err) throw err
    }
  )
  exec(
    `mongoimport --uri mongodb://localhost:27017/${name} --file ${__dirname}/seed-data/${collection}.json --jsonArray --drop
    `,
    (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`)
        return
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`)
        return
      }
      console.log(`stdout: ${stdout}`)
    }
  )
}

postCollection('project', projects)
postCollection('evidence', evidence)
postCollection('users', users)
postCollection('observation', observations)
postCollection('assumption', assumptions)
