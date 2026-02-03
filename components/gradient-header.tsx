interface GradientHeaderProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;

}

export default function GradientHeader({ title, subtitle, children }: GradientHeaderProps) {
    return (
        <div className="relative-overflow-hidden  p-6 rounded-2xl bg-gradient-to-r from-blue-700">
            <div className="relative z-10">
                <h1 className="text-2xl font-bold text-white">{title}</h1>
                {subtitle && <p className="text-white opacity-80 mt-2">{subtitle}</p>}
                {children}
            </div>
        </div>
    )
}