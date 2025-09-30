import { ArrowLeftIcon } from "@ui-kit/icons/arrow/arrow-left.icon";
import { WarningIcon } from "@ui-kit/icons/warning.icon";
import { Alert, AlertGroup } from "@ui-kit/ui/Alert";
import { Card } from "@ui-kit/ui/Card";

import { Title } from "@ui-kit/ui/Font/Title";
import { LinkApp } from "@ui-kit/ui/LinkApp";







 export default async function NotFound() {




    return (
        <section className="flex justify-center items-center h-screen">
            <Card variant={"primary"} className="flex flex-col items-center gap-3" >
                <div className="flex items-center gap-3">
                    <WarningIcon />
                    <Title level="h1" align="center">404</Title>
                </div>
                <AlertGroup>
                    <Alert message="404 Страница не найдена" variant={"error"} />
                    <Alert message="Возможно вы перешли по неправильной ссылке" variant={"warning"} />
                </AlertGroup>
                <LinkApp 
                    href="/" iconPosition="left" 
                    icon = {<ArrowLeftIcon />} 
                >
                    Вернуться на главную
                </LinkApp>
            </Card>
        </section>
    );
}