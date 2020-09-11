import React,{ useEffect, useState } from 'react';
import { SelectContent, SelectComponent, SelectContainer, SelectArrow, OptionItem } from './styles';
interface Company{
    id: string;
    name: string;
    theme_color: string;
    description?:string;
}

interface SelectProps{
    options?: string[];
    optionsCompany?: Company[];
    name: string;
    placeholder: string;
}

const Select: React.FC<SelectProps> = ({ options, optionsCompany, name, placeholder }) => {
    const [value, setValue] = useState(placeholder);
    const [showOptions, setShowOptions] = useState(false);

    useEffect(()=>{
        const select = document.getElementById(name);
        window.addEventListener('click', (event)=>{
            if(event.target !== select){
                setShowOptions(false);
            }
            // console.log(event.target);
        })
    }, [])

    function handleToggleOptions(){
        setShowOptions(!showOptions);
    }

    function handleChangeValue(text: string){
        setValue(text)
    }

    function handleChangeCompanyValue(text: string, id: string){
        setValue(text)
    }
    return (
        <SelectContent>
            <SelectContainer shown={showOptions}>
                <SelectComponent id={name} onClick={handleToggleOptions}>
                    <div className="default-option">
                        <p>{ value }</p>
                    </div>
                    <SelectArrow shown={showOptions} color="#9D9D9D" size={20}/>
                </SelectComponent>
                <div className="option-container">
                    <ul className="options">
                        {options && 
                            options.map((option, index) =>{
                                return(
                                    <OptionItem key={index} onClick={()=>handleChangeValue(option)}>
                                        <p>{ option }</p>
                                    </OptionItem>
                                );
                            })
                        }
                        {
                            optionsCompany &&
                            optionsCompany.map(option=>{
                                return(
                                    <OptionItem theme_color={option.theme_color} key={option.id} onClick={()=>handleChangeCompanyValue(option.name, option.id)}>
                                        <p>{ option.name }</p>
                                    </OptionItem>
                                )
                            })
                        }
                    </ul>
                    
                </div>
            </SelectContainer>
        </SelectContent>
    );
}

export default Select;