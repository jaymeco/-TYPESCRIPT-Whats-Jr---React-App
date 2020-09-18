import React, { useCallback, useState } from 'react';
import logoImg from '../../../../assets/images/logo-wihte.svg';
import { Container, SidebarContainer, ToggleButton, ToggleIcon, Logo, Avatar, MainMenu } from './styles';
import { MdHome, MdPeople, MdExplore, MdNotifications, MdPerson, MdExitToApp } from 'react-icons/md';


function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleToggleSidebar = useCallback(() => {
        const mainMenu = document.getElementById('main-menu');
        const logo = document.getElementById('logo');
        const username = document.getElementById('username');

        if (mainMenu && logo && username) {
            if (isCollapsed) {
                setIsCollapsed(!isCollapsed);
                mainMenu.querySelectorAll('p').forEach(pa => {
                    setTimeout(() => {
                        pa.style.display = 'unset';
                        logo.style.display = 'unset';
                        username.style.display = 'unset';
                    }, 250);
                })

            } else {
                setIsCollapsed(!isCollapsed);
                mainMenu.querySelectorAll('p').forEach(pa => {
                    pa.style.display = 'none';
                    logo.style.display = 'none';
                    username.style.display = 'none';
                })
            }
        }
    }, [isCollapsed])

    return (
        <Container isCollapsed={isCollapsed}>
            <SidebarContainer isCollapsed={isCollapsed}>
                <div>
                    <Logo id="logo" src={logoImg} alt="Logo da WhatsJr" />
                    <Avatar
                        isCollapsed={isCollapsed}
                        src="https://pbs.twimg.com/profile_images/1081573705409613825/zNW0VcoU_bigger.jpg"
                        alt="Imgem de perfil"
                    />
                    <h3 id="username">Chápeu_de_palha</h3>
                </div>
                <MainMenu id="main-menu" isCollapsed={isCollapsed} theme_color="#ffcf00">
                    <li>
                        <MdHome color="#fff" size={25} />
                        <p>Início</p>
                    </li>
                    <li>
                        <MdPeople color="#fff" size={25} />
                        <p>Amigos</p>
                    </li>
                    <li>
                        <MdExplore color="#fff" size={25} />
                        <p>Explorar</p>
                    </li>
                    <li>
                        <MdNotifications color="#fff" size={25} />
                        <p>Solicitações</p>
                    </li>
                    <li>
                        <MdPerson color="#fff" size={25} />
                        <p>Perfil</p>
                    </li>
                    <li className="exit-link">
                        <MdExitToApp color="#fff" size={25} />
                        <p>Sair</p>
                    </li>
                </MainMenu>
            </SidebarContainer>
            <ToggleButton onClick={handleToggleSidebar}>
                <ToggleIcon />
            </ToggleButton>
        </Container>
    );
}

export default Sidebar;