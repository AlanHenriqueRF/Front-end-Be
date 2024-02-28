import { styled } from "styled-components"

export default function Table() {
    return (
        <>
            <Container>
                <BoxTable>
                    <Title>
                        <tr>
                            <th scope="col">FOTO</th>
                            <th scope="col">NOME</th>
                            <th scope="col">CARGO</th>
                            <th scope="col">DATA DE ADMISSÃO</th>
                            <th scope="col">TELEFONE</th>
                        </tr>
                    </Title>
                    <Tbody>
                        <tr>
                            <td><img src="https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg" alt="" /></td>
                            <td>Giovana L. Arruda</td>
                            <td>Front-end</td>
                            <td>00/00/0000</td>
                            <td>+55 (55) 55555-555</td>
                        </tr>
                        <tr>
                            <td><img src="https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg" alt="" /></td>
                            <td>Giovana L. Arruda</td>
                            <td>Front-end</td>
                            <td>00/00/0000</td>
                            <td>+55 (55) 55555-555</td>
                        </tr>
                        <tr>
                            <td><img src="https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg" alt="" /></td>
                            <td>Giovana L. Arruda</td>
                            <td>Front-end</td>
                            <td>00/00/0000</td>
                            <td>+55 (55) 55555-555</td>
                        </tr>
                        <tr>
                            <td><img src="https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg" alt="" /></td>
                            <td>Giovana L. Arruda</td>
                            <td>Front-end</td>
                            <td>00/00/0000</td>
                            <td>+55 (55) 55555-555</td>
                        </tr>
                        <tr>
                            <td><img src="https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg" alt="" /></td>
                            <td>Giovana L. Arruda</td>
                            <td>Front-end</td>
                            <td>00/00/0000</td>
                            <td>+55 (55) 55555-555</td>
                        </tr>
                        <tr>
                            <td><img src="https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg" alt="" /></td>
                            <td>Giovana L. Arruda</td>
                            <td>Front-end</td>
                            <td>00/00/0000</td>
                            <td>+55 (55) 55555-555</td>
                        </tr>
                        <tr>
                            <td><img src="https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg" alt="" /></td>
                            <td>Giovana L. Arruda</td>
                            <td>Front-end</td>
                            <td>00/00/0000</td>
                            <td>+55 (55) 55555-555</td>
                        </tr>
                        <tr>
                            <td><img src="https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg" alt="" /></td>
                            <td>Giovana L. Arruda</td>
                            <td>Front-end</td>
                            <td>00/00/0000</td>
                            <td>+55 (55) 55555-555</td>
                        </tr>
                        <tr>
                            <td><img src="https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg" alt="" /></td>
                            <td>Giovana L. Arruda</td>
                            <td>Front-end</td>
                            <td>00/00/0000</td>
                            <td>+55 (55) 55555-555</td>
                        </tr>
                        <tr>
                            <td><img src="https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg" alt="" /></td>
                            <td>Giovana L. Arruda</td>
                            <td>Front-end</td>
                            <td>00/00/0000</td>
                            <td>+55 (55) 55555-555</td>
                        </tr>
                    </Tbody>
                </BoxTable>
            </Container>
        </>
    )
}

const Container = styled.div`
    margin: 0 35px 0 32px;
`

const BoxTable = styled.table`
    width: 100%;
    border-collapse: separate;
    tr{
        box-shadow: 0 1px 2px #00000033;
    }
`

const Tbody = styled.tbody`
    tr{
        height: 49px;
        td{
            text-align: left;
            vertical-align: middle;
            padding-left: 32px;
            img{
                width: 34px;
                height: 34px;
                border-radius: 34px;
            }
        }
    }
`

const Title = styled.thead`
    height: 47px;
    background: linear-gradient(to bottom, #5A84C0, #594ED2);
    th{
        color: #FFFFFF;
        text-align: left;
        vertical-align: middle;
        padding-left: 32px;
    }
    :first-child{
        border-top-left-radius: 8px;
    }
    :last-child{
        border-top-right-radius: 8px;
    }
`