import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button';
import styled from 'styled-components';

const CustomButton: React.FC<ButtonProps> = styled(Button)`
    width: 200px;
`;

export default CustomButton;