"use client";

import { Container } from "@ui-kit/ui/Container";

import { SideBarContainer } from "./sidebar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return <div>
        <SideBarContainer />
        <Container>
            <main>
                {children}
            </main>
        </Container>
    </div>;
};