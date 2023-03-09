/* eslint-disable-next-line */
import React, { ChangeEvent, useState } from 'react';
import { Button, CheckmarkIcon } from '@featurefm/design-system'

export interface OAuthEmailConfirmationProps {
  description: string,
  benefits?: string[],
  oauthUrl: string,
  emailPlaceholder: string,
  buttonText: string,
}

export function OAuthEmailConfirmation(props: OAuthEmailConfirmationProps) {
  let [user, setUser] = useState<string | null>(null)
  let [isValid, setIsValid] = useState<boolean>(false)
  let sc = `${props.oauthUrl}&state=${encodeURIComponent(JSON.stringify({email: user}))}`
  let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

  let validate = (value: string) => {
    setIsValid(true)
    if (!regex.test(value)) {
      setIsValid(false)
    }
    setUser(value)
  }

  return (
    <div className="w-[520px] flex flex-col pt-4 pb-10">
      <div className="font-medium text-lg text-center">{props.description}</div>
      <input className="border border-[#cfcfcf] outline-none rounded-[35px] mt-10 px-[28px] py-6 text-[16px] desktop:text-lg desktop:leading-[22px] font-normal" onChange={(e) => validate(e.target.value)} placeholder={props.emailPlaceholder}/>
      <Button text={props.buttonText} width="full" disabled={!isValid} link={sc} className="mt-4 bg-[#F65202]" size="extra-large"/>
      <div className="text-xs text-center mt-2">
        By clicking "{props.buttonText}" you agree to our <a href="https://ffm.to/terms" className="text-primary1" target="_blank">Terms of Service</a> and <a href="https://ffm.to/privacypolicy" className="text-primary1" target="_blank">Privacy Policy</a>.
      </div>
      <div className= "py-10 px-8 flex-col gap-y-6 flex mt-10" style={{background: 'linear-gradient(270deg, rgba(255, 82, 98, 0.15) 0%, rgba(255, 103, 117, 0.03) 100%)'}}>
        {props.benefits?.map(x => (
          <div className="flex gap-x-2 items-center">
            <CheckmarkIcon />
            {x}
          </div>
        ))}
      </div>
    </div>
  );
}

export default OAuthEmailConfirmation
