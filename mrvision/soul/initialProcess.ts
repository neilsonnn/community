import { ChatMessageRoleEnum, externalDialog, instruction, mentalQuery } from "socialagi";
import { MentalProcess, useActions, useProcessManager } from "soul-engine";
import shouts from "./mentalProcesses/shouts.js";
import { bumbles } from "./image.js";

const url = "https://shop-pawness.com/wp-content/uploads/2019/12/LIVING-THE-HAPPY-LIFE.jpg"

const gainsTrustWithTheUser: MentalProcess = async ({ step: initialStep }) => {
  const { speak, log } = useActions()

  const visionStep = await initialStep.withUpdatedMemory((existing) => {
    return [
      existing.flat()[0],
      {
        role: ChatMessageRoleEnum.User,
        content: [
          {
            type: "text",
            text: "What is thi?",
          },
          {
            type: "image_url",
            image_url: url,
          }
        ]
      }
    ]
  })

  const visionResp = await visionStep.next(instruction("hey hey"), { model: "vision" })
  // log("vision responded")
  speak(visionResp.value);


  return initialStep
}

export default gainsTrustWithTheUser
