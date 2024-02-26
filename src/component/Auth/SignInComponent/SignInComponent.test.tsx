import { fireEvent, render, screen } from "@testing-library/react"
import SignInComponent from "./SignInComponent"


describe('sign in form testing', () =>{


    beforeEach(()=>{
        render(<SignInComponent/>)
    });

    it("checking html h1 tag",() =>{
        const h1Element = screen.getByTestId('h1-tag');
        expect(h1Element).toBeInTheDocument();
        expect(h1Element.textContent).toBe("Sign In");
    });

    it('email is there',() =>{
        const inputEmail = screen.getByTestId('email-input');
        expect(inputEmail).toBeInTheDocument();
        fireEvent.change(inputEmail,{target:{value:'jd'}});
        expect(inputEmail.textContent).toBe('')
    });

    it.only('password is there',()=>{
        const inputPassword = screen.getByTestId('password-input');
        expect(inputPassword).toBeInTheDocument();
        fireEvent.change(inputPassword,{target: {value :''}});
        expect(inputPassword.textContent).toBe('');
    })

})