export namespace theme {
    namespace color {
        let primary: string;
        let background: string;
    }
    namespace spacing {
        let small: number;
        let medium: number;
    }
    namespace font {
        namespace size {
            let body: number;
        }
    }
    namespace radius {
        let _default: number;
        export { _default as default };
    }
}
