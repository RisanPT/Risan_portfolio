"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { HiBriefcase, HiCalendar } from 'react-icons/hi';
import { config } from '@/config';

const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.23, 1, 0.32, 1]
        }
    }
};

const ExperienceSection = () => {
    // Assuming config.experiences provides an array of experience objects
    const experiences = config.experiences || [];

    if (!experiences || experiences.length === 0) {
        return null;
    }

    return (
        <section className="py-16 md:py-24" id="experience">
            <div className="container mx-auto px-6">
                <motion.div
                    variants={containerAnimation}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="space-y-12 md:space-y-16"
                >
                    {/* Header Section */}
                    <div className="max-w-2xl mx-auto text-center space-y-4 md:space-y-6">
                        <motion.div
                            variants={itemAnimation}
                            className="inline-flex items-center space-x-2 bg-secondary/10 border-[1.8px] border-zinc-900/70 px-4 py-2 rounded-full text-primary backdrop-blur-sm"
                        >
                            <HiBriefcase className="w-5 h-5 text-primary" />
                            <span className="text-sm font-medium text-primary">
                                Professional Experience
                            </span>
                        </motion.div>

                        <motion.div variants={itemAnimation} className="space-y-2">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">
                                Work Experience
                            </h2>
                            <p className="text-base md:text-lg text-white/70">
                                A journey through my professional career and key achievements
                            </p>
                        </motion.div>
                    </div>
                    {/* --- */}

                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            variants={containerAnimation}
                            className="space-y-10 md:space-y-8"
                        >
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemAnimation}
                                    className="relative group" 
                                >
                                    <div className="flex gap-4 md:gap-6">

                                        {/* 1. Timeline Icon & Line Container */}
                                        <div className="flex flex-col items-center">
                                            {/* Icon */}
                                            <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-black border border-white/30 shadow-lg transition-all duration-300 group-hover:border-white/60 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]">
                                                <HiBriefcase className="w-5 h-5 md:w-6 md:h-6 text-white" />
                                            </div>

                                            {/* Line: Render a full line for all items except the last one */}
                                            {index < experiences.length - 1 && (
                                                <div className="w-1 md:w-0.5 h-full bg-gradient-to-b from-white/40 via-white/20 to-transparent mt-3 md:mt-4" />
                                            )}
                                        </div>

                                        {/* 2. Content Card */}
                                        <div className="flex-1 pb-6 md:pb-8">
                                            <div className="bg-black border border-white/30 rounded-2xl p-4 md:p-6 backdrop-blur-md shadow-[0_4px_10px_rgba(255,255,255,0.05),0_0_15px_rgba(255,255,255,0.02)] hover:border-white/60 transition-all duration-300 relative overflow-hidden hover:shadow-[0_4px_10px_rgba(255,255,255,0.1),0_0_20px_rgba(255,255,255,0.05)]">

                                                {/* Shiny overlay effect: NOTE: The 'shiny-sweep' class needs custom CSS/keyframes defined outside this component. */}
                                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shiny-sweep" />
                                                </div>

                                                {/* Glossy shine effect */}
                                                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                                                    <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-2xl" />
                                                </div>

                                                <div className="relative z-10">
                                                    {/* Title & Period Section */}
                                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-3 mb-3 md:mb-4">
                                                        <div>
                                                            <h3 className="text-lg md:text-xl font-bold text-white mb-0.5">
                                                                {exp.position}
                                                            </h3>
                                                            <p className="text-white/80 text-sm md:text-base font-medium">
                                                                {exp.company}
                                                            </p>
                                                        </div>
                                                        <div className="flex items-center gap-1.5 text-xs md:text-sm text-white/70 whitespace-nowrap">
                                                            <HiCalendar className="w-3.5 h-3.5 md:w-4 md:h-4" />
                                                            <span>{exp.period}</span>
                                                        </div>
                                                    </div>

                                                    {exp.location && (
                                                        <p className="text-xs text-white/60 mb-3">
                                                            {exp.location}
                                                        </p>
                                                    )}

                                                    {exp.description && (
                                                        <p className="text-sm text-white/70 leading-relaxed mb-3">
                                                            {exp.description}
                                                        </p>
                                                    )}

                                                    {/* Responsibilities list */}
                                                    {exp.responsibilities && exp.responsibilities.length > 0 && (
                                                        <ul className="space-y-1.5">
                                                            {exp.responsibilities.map((responsibility, idx) => (
                                                                <li key={idx} className="flex items-start gap-2 text-sm text-white/70">
                                                                    <span className="text-white/40 mt-1">▸</span>
                                                                    <span>{responsibility}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}

                                                    {/* Technologies */}
                                                    {exp.technologies && exp.technologies.length > 0 && (
                                                        <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/10">
                                                            {exp.technologies.map((tech, idx) => (
                                                                <span
                                                                    key={idx}
                                                                    className="text-xs bg-white/10 text-white px-2.5 py-0.5 rounded-full border border-white/20 hover:bg-white/20 transition-colors"
                                                                >
                                                                    {tech}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ExperienceSection;