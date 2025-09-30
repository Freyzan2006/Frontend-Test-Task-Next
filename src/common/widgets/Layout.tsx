"use client";

import { Container } from "@ui-kit/ui/Container";

import { SideBarContainer } from "./sidebar";
import { FooterContainer } from "./footer";
import { HeaderContainer } from "./header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return <div>
        <SideBarContainer />
        <HeaderContainer />
        <Container>
            <main className="mt-4">
                {children}
            </main>
        </Container>
        <FooterContainer />
    </div>;
};